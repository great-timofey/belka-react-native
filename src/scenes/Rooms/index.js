import React, { memo, useCallback, useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import { useClientHook } from '@hooks/useClientHook'
import { BELKA } from '@navigation/names'
import { GameOverModal } from '@components/GameOverModal'
import { ContainerWithBackground } from '@components/ContainerWithBackground'

import styles from './styles'

export const Rooms = memo(function() {
  const client = useClientHook()
  const [rooms, setRooms] = useState([])
  const [showModal, setShowModal] = useState(false)
  const { navigate } = useNavigation()

  const updateRooms = useCallback(() => {
    if (!client) return

    async function getRooms() {
      const newRooms = await client.getAvailableRooms()
      if (newRooms && newRooms.length) setRooms(newRooms)
    }

    getRooms()
  }, [client])

  useEffect(updateRooms, [])

  const joinRoom = useCallback(
    roomId => {
      if (!client) return

      navigate(BELKA, { roomId })
    },
    [navigate, client]
  )

  return (
    <ContainerWithBackground>
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
        <Button
          title="show modal"
          style={styles.updateRoomButton}
          onPress={() => setShowModal(true)}
        />
        <GameOverModal open={showModal} closeCallback={() => setShowModal(false)} />
      </>
    </ContainerWithBackground>
  )
})

// Rooms.navigationOptions = () => ({
//   headerTitle: null
// })
