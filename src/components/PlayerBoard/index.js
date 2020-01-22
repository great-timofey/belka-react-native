import React, { memo, useCallback, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from '@components/Card'
import { getSuitCode } from '@utils/suit'
import { roomAddAction } from '@redux/belkaGame/actions'

import styles from './styles'
// import { mockState } from '@redux/belkaGame/mockState'

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
        my={player === me}
        index={i}
        key={`${card.id}`}
        data={card}
        onPress={handlePlayCard(card.id)}
      />
    ))
  }, [hand, me, objects, player, handlePlayCard])

  return (
    <View style={[styles.playerBoardContainer, player === me && styles.playerBoardContainerMy]}>
      {player !== me && (
        <View style={[styles.playerNameContainerCommon, styles[`playerNameContainer-${index}`]]}>
          <Text style={styles.commonTextStyles}>{player.name}</Text>
        </View>
      )}
      {player.suit >= 0 && (
        <View style={styles.nameContainer}>
          <Text style={styles.commonTextStyles}>Trump: {getSuitCode(player.suit)}</Text>
        </View>
      )}
      <View style={[styles.playerCardsContainer, styles[`playerCardsContainer-${index}`]]}>
        {renderPlayerCards()}
      </View>
    </View>
  )
})
