import React, { memo, useMemo } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { scoreContainer } from '@global/images'

import styles from './styles'

export const InfoBoard = memo(function() {
  const { clients, objects } = useSelector(state => state.belkaGame)

  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects],
  )

  const board = useMemo(() => boardId && objects[boardId], [objects, boardId])
  const team1 = useMemo(() => (clients && objects[board.team1Id]) || {}, [clients, board, objects])
  const team2 = useMemo(() => (clients && objects[board.team2Id]) || {}, [clients, board, objects])

  return (
    board && (
      <View style={styles.infoBoard}>
        <ImageBackground source={scoreContainer} style={styles.scoreContainerImage}>
          <Text style={styles.scoreText}>{(team1 && team1.gameScore) || 0}</Text>
        </ImageBackground>
        <ImageBackground
          source={scoreContainer}
          style={[styles.scoreContainerImage, styles.scoreContainerImageRight]}
        >
          <Text style={[styles.scoreText, styles.scoreTextRight]}>
            {(team2 && team2.gameScore) || 0}
          </Text>
        </ImageBackground>
      </View>
    )
  )
})
