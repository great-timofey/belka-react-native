import React, { memo, useMemo } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './styles'

export const InfoBoard = memo(function() {
  const { clients, objects } = useSelector(state => state.belkaGame)

  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects]
  )
  const board = useMemo(() => boardId && objects[boardId], [objects, boardId])
  const clientList = useMemo(() => (clients && Object.keys(clients)) || [], [clients])

  return (
    clientList.length === 4 &&
    board && (
      <Text style={styles.infoBoard}>
        {board.team1} / {board.team2}
      </Text>
    )
  )
})
