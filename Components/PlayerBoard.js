import React, { memo, useCallback, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { getSuitCode } from '../utils/suit'

import { Card } from './Card'

export const PlayerBoard = memo(function({ player }) {
  const { actions, room, hand, clients, objects } = useSelector(state => state.belkaGame)

  if (!player || !player.handId) {
    return <View />
  }

  const me = useMemo(() => (room && objects[clients[room.sessionId]]) || {}, [
    room,
    objects,
    clients
  ])

  const handlePlayCard = useCallback(
    cardId => () => {
      console.log('play card with id', cardId)
      // const action = actions.find(action => action.data.objectId === cardId)
      // action && room.send({ type: 'action', data: { actionId: action.id } })
    },
    []
  )

  const renderHand = useCallback(() => {
    const playerHand = []
    objects[player.handId].items.forEach(id => {
      if (player !== me) {
        objects[id] && playerHand.push(objects[id])
      } else {
        hand[id] && playerHand.push(hand[id])
      }
    })

    return playerHand.map(card => (
      <Card key={card.id} data={card} onPress={handlePlayCard(card.id)} />
    ))
  }, [hand, handlePlayCard, me, objects, player])

  return (
    <View
      style={{
        padding: 10
      }}
    >
      <Text style={{ color: 'white', fontSize: 14 }}>{player.name}</Text>
      {!player.connected ? <Text style={{ color: 'red' }}>Weak signal!</Text> : <View />}
      {player.timer >= 0 ? <Text>Time: {player.timer}</Text> : <View />}
      {player.suit >= 0 ? <Text>Trump: {getSuitCode(player.suit)}</Text> : <View />}
      <Text>score: {player.score}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>{renderHand()}</View>
    </View>
  )
})
