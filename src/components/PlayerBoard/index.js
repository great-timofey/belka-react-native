import React, { memo, useCallback, useState, useMemo, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Circle } from 'react-native-progress'

import { getSuitCode } from '@utils/suit'
import { roomAddAction } from '@redux/belkaGame/actions'
import { colors } from '@global/styles'
import { useInterval } from '@hooks'

import { Card } from '../Card'

import styles from './styles'

const CARD_OFFSETS = new Map([
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 2],
  [5, 1],
  [6, 1],
  [7, 0],
  [8, 0],
])

export const PlayerBoard = memo(function({ player, my, index }) {
  const { actions, hand, objects, clients } = useSelector(state => state.belkaGame)
  const [timerValue, setTimerValue] = useState(null)
  const dispatch = useDispatch()

  const timer = useMemo(
    () => player && player.timerId && objects[player.timerId] && objects[player.timerId].value,
    [player, objects],
  )

  useEffect(() => {
    if (timer && timer > -1) {
      setTimerValue(timer)
    }
  }, [timer])

  useInterval(() => {
    if (timerValue) {
      setTimerValue(timerValue - 1)
    }

    if (timerValue === 0 || !timer || timer === -1) {
      setTimerValue(null)
    }
  })

  const playerClient = useMemo(
    () =>
      player &&
      player.id &&
      Object.values(clients).find(
        client => client && client.objectId && client.objectId === player.id,
      ),
    [clients, player],
  )

  const playerCardsLength = useMemo(() => {
    if (!player || !player.handId) return
    return objects[player.handId].items.length
  }, [player, objects])

  const handlePlayCard = useCallback(
    cardId => () => {
      const foundAction = actions.find(action => action.data.objectId === cardId)
      if (foundAction) {
        dispatch(roomAddAction(foundAction.id))
      }
    },
    [actions, dispatch],
  )

  const renderPlayerCards = useCallback(() => {
    if (!player || !player.handId) return []
    let playerHand = objects[player.handId].items.map(id => objects[id]) || []
    playerHand = my ? playerHand.map(card => hand[card.id]) : playerHand

    const offset = CARD_OFFSETS.get(playerCardsLength)

    return playerHand.map((card, i) => (
      <Card
        index={i + offset}
        data={card}
        key={`${card.id}`}
        my={my}
        additionalStyles={[playerCardsLength === 1 && !my && styles.cardAlone]}
        onPress={handlePlayCard(card.id)}
      />
    ))
  }, [hand, my, objects, player, handlePlayCard, playerCardsLength])

  return (
    <View style={[styles.playerBoardContainer, my && styles.playerBoardContainerMy]}>
      {timerValue !== null && (
        <View
          style={[
            styles.playerTimerContainerCommon,
            my ? styles.playerTimerContainerMy : styles[`playerTimerContainer${index}`],
          ]}
        >
          <Circle
            direction="counter-clockwise"
            color={colors.semanticHighlight}
            thickness={1}
            textStyle={{ fontSize: 20, color: 'white' }}
            formatText={progress => `${Math.round((progress * 1000) / 33.3)}`}
            progress={(1 / 30) * timerValue || 0}
            showsText
          />
        </View>
      )}
      {!my && (
        <View
          style={[
            styles.playerNameContainerCommon,
            styles[`playerNameContainer${index}`],
            timerValue !== null && styles.playerNameActive,
          ]}
        >
          <Text style={styles.commonTextStyles}>{(playerClient && playerClient.name) || ''}</Text>
        </View>
      )}
      {player && player.suit && player.suit >= 0 && (
        <View
          style={[
            styles.trumpContainer,
            my ? styles.trumpContainerMy : styles[`playerTrumpContainer${index}`],
          ]}
        >
          <Text style={styles.commonTextStyles}>{getSuitCode(player.suit)}</Text>
        </View>
      )}
      <View
        style={[
          styles.playerCardsContainer,
          styles[`playerCardsContainer${index}`],
          !my && styles[`playerCardsContainer${playerCardsLength}`],
        ]}
      >
        {renderPlayerCards()}
      </View>
    </View>
  )
})
