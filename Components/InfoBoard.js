import React, { memo, useMemo } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

export const InfoBoard = memo(function() {
  const { clients, room, objects } = useSelector(state => state.belkaGame)

  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects]
  )
  const board = useMemo(() => boardId && objects[boardId], [objects, boardId])
  const clientList = useMemo(() => (clients && Object.keys(clients)) || [], [clients])

  // const addBot = () => room.send({ type: "addbot" })

  return (
    <Text style={{ textAlign: 'center' }}>
      {clientList.length === 4 && board
        ? `Очки команд (глаза) ${board.team1} / ${board.team2}`
        : 'add bot button'}
    </Text>
  )
})
