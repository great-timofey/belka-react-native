import React, { memo, useCallback } from 'react'
import { Button, Text, View } from 'react-native'

export const Rooms = memo(function({ rooms = [], client, setRoom }) {
  const joinRoom = useCallback(
    async roomId => {
      if (!client) return

      const room = await client.joinById(roomId)
      setRoom(room)
    },
    [setRoom, client]
  )

  return (
    <View>
      {rooms.length ? (
        rooms.map(room => (
          <Button
            style={{
              flex: 1,
              borderBottom: 'black',
              borderBottomWidth: 1,
              backgroundColor: 'red'
            }}
            key={room.roomId}
            onPress={() => joinRoom(room.roomId)}
            title={`${room.name} - ${room.roomId}`}
          />
        ))
      ) : (
        <Text>No rooms available</Text>
      )}
    </View>
  )
})
