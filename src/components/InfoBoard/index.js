import React, { memo, useMemo } from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { iconBelkaChat, scoreContainer } from '@global/images'

import styles from './styles'

export const InfoBoard = memo(function() {
  const { objects } = useSelector(state => state.belkaGame)
  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects],
  )

  const gameBoard = useMemo(() => boardId && objects[boardId], [objects, boardId])

  const team1 = useMemo(() => (gameBoard && objects[gameBoard.team1Id]) || {}, [gameBoard, objects])
  const team2 = useMemo(() => (gameBoard && objects[gameBoard.team2Id]) || {}, [gameBoard, objects])

  return (
    gameBoard && (
      <>
        <Image style={styles.chatButton} source={iconBelkaChat} />
        <View style={styles.infoBoard}>
          <View style={styles.scoreContainer}>
            <Image
              source={scoreContainer}
              style={styles.scoreContainerImage}
              resizeMode="contain"
            />
            <Text style={styles.scoreText}>{(team1 && team1.gameScore) || 0}</Text>
          </View>
          <View style={[styles.scoreContainer]}>
            <Image
              source={scoreContainer}
              style={[styles.scoreContainerImage, styles.scoreContainerImageRight]}
              resizeMode="contain"
            />
            <Text style={[styles.scoreText, styles.scoreTextRight]}>
              {(team2 && team2.gameScore) || 0}
            </Text>
          </View>
        </View>
      </>
    )
  )
})
