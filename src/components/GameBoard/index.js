import React, { Fragment, memo, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { PlayerCard } from '@components/PlayerCard'
import { PlayerBoard } from '@components/PlayerBoard'
import { DeckCards } from '@components/DeckCards'
import { Player } from '@components/Player'

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

    const indices = ['first', 'second', 'third']

    let playersSorted = playersList.sort((a, b) => +a.id[1] - +b.id[1])
    const enemiesMap = {}
    const enemiesCount = playersList.length - 1
    const myIndex = playersSorted.findIndex(player => player === me)

    if (myIndex !== 0) {
      playersSorted = [...playersSorted.slice(myIndex), ...playersSorted.slice(0, myIndex)]
    }

    for (let i = 1; i < enemiesCount + 1; i++) {
      const nextPlayer = playersSorted[i]
      enemiesMap[nextPlayer.id] = indices.shift()
    }

    const enemies = playersList.filter(player => player !== me)

    return enemies.map((player, index) => {
      const localIndex = enemiesMap[player.id]
      return (
        <Fragment key={`${localIndex}-fragment`}>
          <Player key={`${localIndex}-view`} index={localIndex}>
            <PlayerBoard index={index} key={`${player.id}-board`} player={player} />
          </Player>
          <PlayerCard index={localIndex} key={`${localIndex}-card`} player={player} />
        </Fragment>
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
