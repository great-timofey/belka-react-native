import React, { memo, useCallback, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { PlayerCard } from '@components/PlayerCard'
import { PlayerBoard } from '@components/PlayerBoard'
import { DeckCards } from '@components/DeckCards'
import { Player } from '@components/Player'

import styles from './styles'
// import { mockState } from '@redux/belkaGame/mockState'

export const GameBoard = memo(function() {
  const { players, objects, clients, room } = useSelector(state => state.belkaGame)
  // const { players, objects, clients, room } = mockState

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

    const indices = ['first', 'second', 'third']
    const enemiesMap = enemies.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = indices.shift()
      }
      return acc
    }, {})

    return enemies.map((player, index) => {
      const localIndex = enemiesMap[player.id]
      return (
        <>
          <Player key={`${localIndex}-view`} index={localIndex}>
            <Text style={{ position: 'absolute', zIndex: 30, color: 'white' }}>index {index}</Text>
            <PlayerBoard index={index} key={`${player.id}-board`} player={player} />
          </Player>
          <PlayerCard index={localIndex} key={`${localIndex}-card`} player={player} />
        </>
      )
    })
  }, [clients, me, objects, players])

  return (
    <View style={styles.gameBoardContainer}>
      <DeckCards />
      {renderEnemies()}
      <>
        <View style={[styles.myPlayerContainer]}>
          <PlayerBoard my key={`${me.id}-board`} player={me} />
        </View>
        <PlayerCard key={`${me.id}-card`} player={me} />
      </>
    </View>
  )
})
