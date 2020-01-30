import React, { memo, useCallback, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as Progress from 'react-native-progress'

import { getSuitCode } from '@utils/suit'
import { roomAddAction } from '@redux/belkaGame/actions'
import { colors } from '@global/styles'

import { Card } from '../Card'

import styles from './styles'

export const PlayerBoard = memo(function({ player, index }) {
  const { actions, room, hand, clients, objects } = useSelector(state => state.belkaGame)
  // const { actions, room, hand, clients, objects } = mockState
  const dispatch = useDispatch()

  const me = useMemo(() => (room && objects[clients[room.sessionId]]) || {}, [
    room,
    objects,
    clients
  ])

  const handlePlayCard = useCallback(
    cardId => () => {
      const foundAction = actions.find(action => action.data.objectId === cardId)
      if (foundAction) {
        dispatch(roomAddAction(foundAction.id))
      }
    },
    [actions, dispatch]
  )

  const renderPlayerCards = useCallback(() => {
    const playerHand = []

    if (objects && player.handId && objects[player.handId]) {
      objects[player.handId].items.forEach(id => {
        if (player !== me) {
          objects[id] && playerHand.push(objects[id])
        } else {
          hand[id] && playerHand.push(hand[id])
        }
      })
    }

    return playerHand.map((card, i) => (
      <Card
        index={i}
        data={card}
        key={`${card.id}`}
        my={player === me}
        onPress={handlePlayCard(card.id)}
      />
    ))
  }, [hand, me, objects, player, handlePlayCard])

  return (
    <View style={[styles.playerBoardContainer, player === me && styles.playerBoardContainerMy]}>
      {player.timer > -1 && (
        <View
          style={[
            styles.playerTimerContainerCommon,
            player === me ? styles.playerTimerContainerMy : styles[`playerTimerContainer-${index}`]
          ]}
        >
          <Progress.Circle
            direction="counter-clockwise"
            color={colors.semanticHighlight}
            thickness={1}
            textStyle={{ fontSize: 20, color: 'white' }}
            formatText={progress => `${Math.round((progress * 1000) / 30)}`}
            progress={(30 / 100 / 10) * player.timer || 0}
            showsText
          />
        </View>
      )}
      {player !== me && (
        <View style={[styles.playerNameContainerCommon, styles[`playerNameContainer-${index}`]]}>
          <Text style={styles.commonTextStyles}>{player.name}</Text>
        </View>
      )}
      {player.suit >= 0 && (
        <View
          style={[
            styles.trumpContainer,
            player === me ? styles.trumpContainerMy : styles[`playerTrumpContainer-${index}`]
          ]}
        >
          <Text style={styles.commonTextStyles}>{getSuitCode(player.suit)}</Text>
        </View>
      )}
      <View style={[styles.playerCardsContainer, styles[`playerCardsContainer-${index}`]]}>
        {renderPlayerCards()}
      </View>
    </View>
  )
})
