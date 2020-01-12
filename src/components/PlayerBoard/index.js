import React, { memo, useCallback, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from 'components/Card'
import { getSuitCode } from 'utils/suit'
import { roomAddAction } from 'redux/belkaGame/actions'

import styles from './styles'

export const PlayerBoard = memo(function({ player }) {
  const { actions, room, hand, clients, objects } = useSelector(state => state.belkaGame)
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
    [actions, dispatch, room]
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

    return playerHand.map(card => (
      <Card key={`${card.id}`} data={card} onPress={handlePlayCard(card.id)} />
    ))
  }, [hand, me, objects, player, handlePlayCard])

  return (
    <View style={styles.playerBoardContainer}>
      <Text style={styles.commonTextStyles}>{player.name}</Text>
      {!player.connected ? <Text style={styles.commonTextStyles}>Weak signal!</Text> : <View />}
      {player.timer >= 0 ? (
        <Text style={styles.commonTextStyles}>Time: {player.timer}</Text>
      ) : (
        <View />
      )}
      {player.suit >= 0 ? (
        <Text style={styles.commonTextStyles}>Trump: {getSuitCode(player.suit)}</Text>
      ) : (
        <View />
      )}
      <Text style={styles.commonTextStyles}>score: {player.score}</Text>
      <View style={styles.playerCardsContainer}>{renderPlayerCards()}</View>
    </View>
  )
})
