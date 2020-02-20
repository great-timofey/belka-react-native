import React, { memo, useCallback, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Circle } from 'react-native-progress'

import { getSuitCode } from '@utils/suit'
import { roomAddAction } from '@redux/belkaGame/actions'
import { colors } from '@global/styles'

import { Card } from '../Card'

import styles from './styles'

export const PlayerBoard = memo(function({ player, my, index }) {
  const { actions, hand, objects } = useSelector(state => state.belkaGame)
  const dispatch = useDispatch()

  const timer = useMemo(() => objects[player.timerId], [player, objects])

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
    if (!player.handId) return []
    let playerHand = objects[player.handId].items.map(id => objects[id]) || []
    playerHand = my ? playerHand.map(card => hand[card.id]) : playerHand

    return playerHand.map((card, i) => (
      <Card index={i} data={card} key={`${card.id}`} my={my} onPress={handlePlayCard(card.id)} />
    ))
  }, [hand, my, objects, player, handlePlayCard])

  return (
    <View style={[styles.playerBoardContainer, my && styles.playerBoardContainerMy]}>
      {timer && timer.value > -1 && (
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
            formatText={progress => `${Math.round((progress * 1000) / 30)}`}
            progress={(30 / 100 / 10) * timer.value || 0}
            showsText
          />
        </View>
      )}
      {!my && (
        <View style={[styles.playerNameContainerCommon, styles[`playerNameContainer${index}`]]}>
          <Text style={styles.commonTextStyles}>{player.name}</Text>
        </View>
      )}
      {player.suit >= 0 && (
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
