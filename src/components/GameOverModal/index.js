import React, { memo, useMemo } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { useBelkaGameBoard } from '@hooks'

import { BelkaButton } from '../BelkaButton'
import { BelkaModal } from '../BelkaModal'

import styles from './styles'

export const GameOverModal = memo(function({ open, me, closeCallback }) {
  const { objects } = useSelector(state => state.belkaGame)
  const gameBoard = useBelkaGameBoard()

  const team1Score = useMemo(
    () =>
      objects &&
      gameBoard &&
      gameBoard.team1Id &&
      objects[gameBoard.team1Id] &&
      objects[gameBoard.team1Id].gameScore,
    [objects, gameBoard],
  )

  const team2Score = useMemo(
    () =>
      objects &&
      gameBoard &&
      gameBoard.team2Id &&
      objects[gameBoard.team2Id] &&
      objects[gameBoard.team2Id].gameScore,
    [objects, gameBoard],
  )

  const team1Players = useMemo(
    () =>
      objects &&
      gameBoard &&
      gameBoard.team1Id &&
      Object.values(objects).filter(object => object.teamId === gameBoard.team1Id),
    [objects, gameBoard],
  )

  const team2Players = useMemo(
    () =>
      objects &&
      gameBoard &&
      gameBoard.team2Id &&
      Object.values(objects).filter(object => object.teamId === gameBoard.team2Id),
    [objects, gameBoard],
  )

  const currentPlayerIsWinner = useMemo(() => {
    if (!team1Players) return
    const playerInFirstTeam = team1Players.find(player => player.id === me.objectId)
    return playerInFirstTeam ? team1Score > team2Score : team2Score > team1Score
  }, [team1Players, team1Score, team2Score, me.objectId])

  const sum = useMemo(() => 24000, [])

  const subheadText = useMemo(() => {
    return `${currentPlayerIsWinner ? 'Выиграли' : 'Проиграли'}: ${
      currentPlayerIsWinner ? sum : -sum
    }`
  }, [sum, currentPlayerIsWinner])

  return (
    <BelkaModal
      open={open}
      closeCallback={closeCallback}
      header={`Вы ${currentPlayerIsWinner ? 'выиграли' : 'проиграли'}`}
      headerNegative={!currentPlayerIsWinner}
      content={
        <>
          <Text style={styles.modalSubhead}>{subheadText}</Text>
          <Text style={styles.scoresHead}>Набрано очков</Text>
          <View style={styles.teamsList}>
            <View style={styles.teamContainer}>
              <Text style={styles.teamName}>Команда 1:</Text>
              <Text style={styles.teamMembers}>
                {team1Players && team1Players.map(player => player.name).join(', ')}
              </Text>
              <Text style={styles.teamResult}>{team1Score}</Text>
            </View>
            <View style={[styles.teamContainer, styles.teamContainerLast]}>
              <Text style={styles.teamName}>Команда 2:</Text>
              <Text style={styles.teamMembers}>
                {team2Players && team2Players.map(player => player.name).join(', ')}
              </Text>
              <Text style={styles.teamResult}>{team2Score}</Text>
            </View>
          </View>
          <BelkaButton
            additionalStyles={[styles.closeButton]}
            primary
            title="Найти новую игру"
            onPress={closeCallback}
          />
        </>
      }
    />
  )
})
