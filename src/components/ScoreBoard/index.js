import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Card } from '../Card'

import styles from './styles'

export const ScoreBoard = memo(function() {
  const { objects } = useSelector(state => state.belkaGame)
  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects],
  )

  const gameBoard = useMemo(() => boardId && objects[boardId], [objects, boardId])

  const team1Score = useMemo(
    () => (gameBoard && objects[gameBoard.team1Id] && objects[gameBoard.team1Id].gameScore) || 0,
    [gameBoard, objects],
  )
  const team2Score = useMemo(
    () => (gameBoard && objects[gameBoard.team2Id] && objects[gameBoard.team2Id].gameScore) || 0,
    [gameBoard, objects],
  )

  const showLeftCard = team1Score > 5
  const showRightCard = team2Score > 5

  const verticalOffsetLeft = Math.floor((showLeftCard ? team1Score - 6 : team1Score) / 2)
  const verticalOffsetRight = Math.floor((showRightCard ? team2Score - 6 : team2Score) / 2)

  return (
    <>
      <Card scoreboard="score6s" additionalStyles={[styles.leftSideCard]} />
      <Card
        scoreboard="score6c"
        cover={!showLeftCard}
        additionalStyles={[
          styles.leftSideCard,
          { top: verticalOffsetLeft * 20 },
          team1Score % 2 === 1 && styles.leftSideRotatedCard,
        ]}
      />

      <Card scoreboard="score6d" additionalStyles={[styles.rightSideCard]} />
      <Card
        scoreboard="score6h"
        cover={!showRightCard}
        additionalStyles={[
          styles.rightSideCard,
          { top: verticalOffsetRight * 20 },
          team2Score % 2 === 1 && styles.rightSideRotatedCard,
        ]}
      />
    </>
  )
})
