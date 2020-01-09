import React, { memo, useCallback, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

import { useClientHook } from '../hooks/useClientHook'
import { belkaGameScreenName } from '../navigation/names'

export const Rooms = memo(function(props) {
  const client = useClientHook()
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    if (!client) return

    async function getRooms() {
      const newRooms = await client.getAvailableRooms()
      if (newRooms && newRooms.length) setRooms(newRooms)
    }

    getRooms()
  }, [client])

  const joinRoom = useCallback(
    roomId => {
      if (!client) return

      props.navigation.navigate(belkaGameScreenName, { roomId })
    },
    [props.navigation, client]
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
