import React, { Fragment, memo, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { PlayerCard, Player, PlayerBoard, DeckCards } from '@components'

import styles from './styles'
import { getPlayersDataForGameBoard } from './utils'

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

    const { enemies, enemiesMap } = getPlayersDataForGameBoard({ playersList, me })

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
