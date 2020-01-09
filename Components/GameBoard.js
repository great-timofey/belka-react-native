import React, { memo, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { PlayerCard } from './PlayerCard'
import { PlayerBoard } from './PlayerBoard'
import { DeckCards } from './DeckCards'

export const GameBoard = memo(function() {
  const { players, objects, clients, room } = useSelector(state => state.belkaGame)
  const me = useMemo(
    () =>
      (room && room.sessionId && clients[room.sessionId] && objects[clients[room.sessionId]]) || {},
    [clients, objects, room]
  )

  const renderEnemies = useCallback(() => {
    const playersList = []
    if (players.length === 4) {
      const list = [...players]
      const index = list.findIndex(id => me.id === id)
      if (index > 0) {
        list.push(list.splice(0, index))
      }
      list.forEach(id => {
        if (objects[id]) {
          playersList.push(objects[id])
        }
      })
    } else {
      Object.values(clients).forEach(id => {
        if (objects[id]) {
          playersList.push(objects[id])
        }
      })
    }

    const enemies = playersList.filter(player => player !== me)

    return enemies.map(player => (
      <View key={player.id} style={{ flex: 1 }}>
        <PlayerCard player={player} />
        <PlayerBoard player={player} />
      </View>
    ))
  }, [clients, me, objects, players])

  return (
    <View style={{ flex: 1 }}>
      {renderEnemies()}
      <View>
        <PlayerCard player={me} />
        <PlayerBoard player={me} />
      </View>
      <DeckCards />
    </View>
  )
})
