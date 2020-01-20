import React, { memo, useCallback, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

import { useClientHook } from 'hooks/useClientHook'
import { belkaGameScreenName } from 'navigation/names'

import styles from './styles'

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
    <View style={styles.container}>
      <>
        {rooms.length ? (
          rooms.map(room => (
            <Button
              key={room.roomId}
              style={styles.joinRoomButton}
              onPress={() => joinRoom(room.roomId)}
              title={`${room.name} - ${room.roomId}`}
            />
          ))
        ) : (
          <Text>No rooms available</Text>
        )}
        <Button
          title="update rooms"
          style={styles.updateRoomButton}
          color="red"
          onPress={updateRooms}
        />
      </>
    </View>
  )
})
