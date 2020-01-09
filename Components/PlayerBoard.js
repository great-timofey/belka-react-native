import React, { memo, useCallback, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getSuitCode } from '../utils/suit'

import { Card } from './Card'
import { ROOM_ADD_ACTION } from '../redux/belkaGame/actions'

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
      // console.log('play card with id', cardId)
      const foundAction = actions.find(action => action.data.objectId === cardId)
      console.log(foundAction)
      if (foundAction) dispatch({ type: ROOM_ADD_ACTION, data: { actionId: foundAction.id, room } })
    },
    [actions, dispatch, room]
  )

  const playerCards = useCallback(() => {
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
    <View
      style={{
        padding: 10,
        flex: 1
      }}
    >
      <Text style={{ color: 'white', fontSize: 14 }}>{player.name}</Text>
      {!player.connected ? (
        <Text style={{ color: 'red', fontSize: 12 }}>Weak signal!</Text>
      ) : (
        <View />
      )}
      {player.timer >= 0 ? (
        <Text style={{ color: 'white', fontSize: 12 }}>Time: {player.timer}</Text>
      ) : (
        <View />
      )}
      {player.suit >= 0 ? (
        <Text style={{ color: 'white', fontSize: 14 }}>Trump: {getSuitCode(player.suit)}</Text>
      ) : (
        <View />
      )}
      <Text style={{ color: 'white', fontSize: 14, marginBottom: 3 }}>score: {player.score}</Text>
      <View style={{ flex: 2, flexDirection: 'row' }}>{playerCards()}</View>
    </View>
  )
})
