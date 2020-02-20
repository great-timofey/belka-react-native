import React, { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { useBelkaGameBoard, useSessionId } from '@hooks'
import { BOARD_SCENE_NAMES } from '@global/constants'

import { Player } from '../Player'
import { PlayerBoard } from '../PlayerBoard'
import { DeckCards } from '../DeckCards'
import { PlayerCard } from '../PlayerCard'
import { Card } from '../Card'

import styles from './styles'
import { getPlayersDataForGameBoard } from './utils'

export const GameBoard = memo(function() {
  const { players, objects, clients } = useSelector(state => state.belkaGame)
  const sessionId = useSessionId()
  const gameBoard = useBelkaGameBoard()
  const [showRoundResults, setShowRoundResults] = useState(false)

  const me = useMemo(() => (clients[sessionId] && objects[clients[sessionId]]) || {}, [
    clients,
    sessionId,
    objects,
  ])

  const team1 = useMemo(() => (gameBoard && objects[gameBoard.team1Id]) || {}, [gameBoard, objects])
  const team2 = useMemo(() => (gameBoard && objects[gameBoard.team2Id]) || {}, [gameBoard, objects])

  const renderEnemies = useCallback(() => {
    let playersList

    if (players.length === 4) {
      const list = [...players]
      const index = list.findIndex(id => me.id === id)
      if (index > 0) {
        list.push(...list.splice(0, index))
      }
      playersList = list.map(id => objects[id])
    } else {
      playersList = Object.values(clients).map(id => objects[id])
    }

    const { enemies, enemiesMap } = getPlayersDataForGameBoard({ playersList, me })

    return enemies.map(player => {
      const localIndex = enemiesMap[player.id]
      return (
        <Fragment key={`${localIndex}-fragment`}>
          <Player key={`${localIndex}-view`} index={localIndex}>
            <PlayerBoard index={localIndex} key={`${player.id}-board`} player={player} />
          </Player>
          <PlayerCard index={localIndex} key={`${localIndex}-card`} player={player} />
        </Fragment>
      )
    })
  }, [clients, me, objects, players])

  useEffect(() => {
    const roundEnded =
      gameBoard && gameBoard.scene && gameBoard.scene === BOARD_SCENE_NAMES.END_ROUND
    if (!showRoundResults && roundEnded) {
      setShowRoundResults(true)
    } else if (showRoundResults && !roundEnded) {
      setShowRoundResults(false)
    }
  }, [showRoundResults, gameBoard])

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
      {showRoundResults && (
        <View style={styles.roundResultsContainer}>
          <Card
            team="black"
            additionalStyles={[styles.resultsBlack]}
            score={team1 ? team1.roundScore : 0}
          />
          <Card
            team="red"
            additionalStyles={[styles.resultsRed]}
            score={team2 ? team2.roundScore : 0}
          />
        </View>
      )}
    </View>
  )
})
