import React, { memo, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { PlayerCard } from 'components/PlayerCard'
import { PlayerBoard } from 'components/PlayerBoard'
import { DeckCards } from 'components/DeckCards'

import styles from './styles'

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

    return enemies.map(player => {
      return (
        <View key={`${player.id}-view`} style={styles.playerContainer}>
          <PlayerBoard key={`${player.id}-board`} player={player} />
          <PlayerCard key={`${player.id}-card`} player={player} />
        </View>
      )
    })
  }, [clients, me, objects, players])

  return (
    <View style={styles.gameBoardContainer}>
      {renderEnemies()}
      <View style={styles.playerContainer}>
        <PlayerBoard key={`${me.id}-board`} player={me} />
        <PlayerCard key={`${me.id}-card`} player={me} />
      </View>
      <DeckCards />
    </View>
  )
})
