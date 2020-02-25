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
    } else if (!timer || timer === -1) {
      setTimerValue(null)
    }
  }, [timer])

  useInterval(() => {
    if (timerValue) {
      setTimerValue(timerValue - 1)
    }

    if (timerValue === 0) {
      setTimerValue(null)
    }
  })

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

    return playerHand.map((card, i) => (
      <Card index={i} data={card} key={`${card.id}`} my={my} onPress={handlePlayCard(card.id)} />
    ))
  }, [hand, my, objects, player, handlePlayCard])

  const playerClient = useMemo(
    () =>
      player &&
      player.id &&
      Object.values(clients).find(
        client => client && client.objectId && client.objectId === player.id,
      ),
    [clients, player],
  )

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
        <View style={[styles.playerNameContainerCommon, styles[`playerNameContainer${index}`]]}>
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
      <View style={[styles.playerCardsContainer, styles[`playerCardsContainer${index}`]]}>
        {renderPlayerCards()}
      </View>
    </View>
  )
})
