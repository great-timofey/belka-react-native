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
  const clientList = useMemo(() => (clients && Object.keys(clients)) || [], [clients])

  return (
    clientList.length === 4 &&
    board && (
      <View style={styles.infoBoard}>
        <ImageBackground source={scoreContainer} style={styles.scoreContainerImage}>
          <Text style={styles.scoreText}>{board.team1}</Text>
        </ImageBackground>
        <ImageBackground
          source={scoreContainer}
          style={[styles.scoreContainerImage, styles.scoreContainerImageRight]}
        >
          <Text style={[styles.scoreText, styles.scoreTextRight]}>{board.team2}</Text>
        </ImageBackground>
      </View>
    )
  )
})
