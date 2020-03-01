import React, { memo, useState, useMemo, useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Animated, { Easing } from 'react-native-reanimated'

import { iconBelkaChat, scoreContainer } from '@global/images'

import styles from './styles'

export const InfoBoard = memo(function() {
  const { objects } = useSelector(state => state.belkaGame)
  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects],
  )
  const [opacity] = useState(new Animated.Value(0))

  const gameBoard = useMemo(() => boardId && objects[boardId], [objects, boardId])

  const eggsActive = useMemo(
    () =>
      gameBoard &&
      gameBoard.eggsId &&
      objects[gameBoard.eggsId] &&
      objects[gameBoard.eggsId].active,
    [gameBoard, objects],
  )

  useEffect(() => {
    if (eggsActive) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
      }).start()
    } else {
      Animated.timing(opacity, {
        value: 0,
        duration: 300,
        easing: Easing.linear,
      }).start()
    }
  }, [eggsActive, opacity])

  const team1 = useMemo(() => (gameBoard && objects[gameBoard.team1Id]) || {}, [gameBoard, objects])
  const team2 = useMemo(() => (gameBoard && objects[gameBoard.team2Id]) || {}, [gameBoard, objects])

  return (
    gameBoard && (
      <>
        <Image style={styles.chatButton} source={iconBelkaChat} />
        <Animated.View style={[styles.infoBoard, { opacity }]}>
          <View style={[styles.scoreContainer]}>
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
        </Animated.View>
      </>
    )
  )
})
