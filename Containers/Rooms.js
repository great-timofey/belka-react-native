import React, { memo, useCallback, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

import { useClientHook } from '../hooks/useClientHook'
import { belkaGameScreenName } from '../navigation/names'

export const Rooms = memo(function(props) {
  const client = useClientHook()
  const [rooms, setRooms] = useState([])

  const updateRooms = useCallback(() => {
    if (!client) return

    async function getRooms() {
      const newRooms = await client.getAvailableRooms()
      if (newRooms && newRooms.length) setRooms(newRooms)
    }

    getRooms()
  }, [client])

  useEffect(() => updateRooms, [])

  const joinRoom = useCallback(
    roomId => {
      if (!client) return

      props.navigation.navigate(belkaGameScreenName, { roomId })
    },
    [props.navigation, client]
  )

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <>
        {rooms.length ? (
          rooms.map(room => (
            <Button
              style={{
                flex: 1,
                borderBottom: 'black',
                borderBottomWidth: 1,
                marginBottom: 5
              }}
              key={room.roomId}
              onPress={() => joinRoom(room.roomId)}
              title={`${room.name} - ${room.roomId}`}
            />
          ))
        ) : (
          <Text>No rooms available</Text>
        )}
        <Button title="update rooms" style={{ marginTop: 5 }} color="red" onPress={updateRooms} />
      </>
    </View>
  )
})
