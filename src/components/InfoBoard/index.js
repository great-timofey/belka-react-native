import React, { memo, useCallback, useMemo } from 'react'
import { Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { ROOM_ADD_BOT } from 'redux/belkaGame/actions'
import styles from './styles'

export const InfoBoard = memo(function() {
  const { clients, objects } = useSelector(state => state.belkaGame)
  const dispatch = useDispatch()

  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects]
  )
  const board = useMemo(() => boardId && objects[boardId], [objects, boardId])
  const clientList = useMemo(() => (clients && Object.keys(clients)) || [], [clients])

  const addBot = useCallback(() => dispatch({ type: ROOM_ADD_BOT }), [dispatch])

  return clientList.length === 4 && board ? (
    <Text style={styles.infoBoard}>
      Очки команд (глаза) {board.team1} / {board.team2}
    </Text>
  ) : (
    <Button title="добавить бота" onPress={addBot} />
  )
})
