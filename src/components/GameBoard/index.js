import React, { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { useSessionId } from '@hooks'
import { BOARD_SCENE_NAMES } from '@global/constants'

import { Player } from '../Player'
import { PlayerBoard } from '../PlayerBoard'
import { DeckCards } from '../DeckCards'
import { PlayerCard } from '../PlayerCard'
import { Card } from '../Card'
import { GameOverModal } from '../GameOverModal'

import styles from './styles'
import { sortPlayersDataForGameBoard } from './utils'

export const GameBoard = memo(function({ onRoomLeave }) {
  const { players, objects, clients } = useSelector(state => state.belkaGame)
  const sessionId = useSessionId()
  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects],
  )

  const board = useMemo(() => boardId && objects[boardId], [objects, boardId])
  const [showRoundResults, setShowRoundResults] = useState(false)
  const [showGameResults, setShowGameResults] = useState(false)

  const boardScene = useMemo(() => boardId && objects[boardId].scene && objects[boardId].scene, [
    objects,
    boardId,
  ])

  const me = useMemo(() => {
    const clientMe = clients[sessionId]
    if (clientMe && clientMe.objectId) {
      const myId = clients[sessionId].objectId
      return objects[myId]
    }
  }, [clients, sessionId, objects])

  const team1 = useMemo(() => (board && objects[board.team1Id]) || {}, [board, objects])
  const team2 = useMemo(() => (board && objects[board.team2Id]) || {}, [board, objects])

  const renderEnemies = useCallback(() => {
    if (players.length !== 4 || !me || !me.id) return

    // return <></>
    const list = [...players]
    const index = list.findIndex(id => me.id === id)
    if (index > 0) {
      list.push(...list.splice(0, index))
    }

    const playersList = list.map(id => objects[id])

    const { enemies, enemiesMap } = sortPlayersDataForGameBoard({ playersList, me })

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
  }, [me, objects, players])

  useEffect(() => {
    const roundEnded = boardScene && boardScene === BOARD_SCENE_NAMES.END_ROUND

    if (!showRoundResults && roundEnded) {
      setShowRoundResults(true)
    } else if (showRoundResults && !roundEnded) {
      setShowRoundResults(false)
    }
  }, [showRoundResults, boardScene])

  useEffect(() => {
    const gameEnded = boardScene && boardScene === BOARD_SCENE_NAMES.END_GAME
    if (gameEnded) {
      setShowGameResults(true)
    }
  }, [boardScene])

  return (
    <View style={styles.gameBoardContainer}>
      <DeckCards />
      {renderEnemies()}
      <>
        <View style={[styles.myPlayerContainer]}>
          <PlayerBoard my player={me} />
        </View>
        <PlayerCard player={me} />
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
      <GameOverModal me={me} open={showGameResults} closeCallback={onRoomLeave} />
    </View>
  )
})
