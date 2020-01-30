import React, { memo, useCallback, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import { useClientHook } from '@hooks/useClientHook'
import { BELKA } from '@navigation/names'
import { GameOverModal, ContainerWithBackground, BelkaSegmentControl, RoomsList } from '@components'

import styles from './styles'
import { ROOMS_GAMES_TYPES } from './constants'

const rooms = [
  {
    roomId: 'RgDxmhrka',
    name: 'belka',
    clients: 1,
    maxClients: 4,
    password: '123',
    bet: 100,
    eggsX4: true,
    dropAce: true,
    spas30: true,
    chat: true,
    fin120: true
  },
  {
    roomId: 'RgDxmhrbk',
    name: 'belka',
    clients: 1,
    maxClients: 4,
    bet: 1000,
    eggsX4: false,
    dropAce: false,
    spas30: false,
    chat: false,
    fin120: false
  }
]

/*
  "bet": 100,
  "password": "111aaaa",
  "eggsX4": true,
  "dropAce": false,
  "spas30": true,
  "fin120": true,
 */

export const Rooms = memo(function() {
  const client = useClientHook()
  const { navigate } = useNavigation()

  // const [rooms, setRooms] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  // const updateRooms = useCallback(() => {
  //   if (!client) return
  //
  //   async function getRooms() {
  //     const newRooms = await client.getAvailableRooms()
  //     if (newRooms && newRooms.length) setRooms(newRooms)
  //   }
  //
  //   getRooms()
  // }, [client])
  //
  // useEffect(updateRooms, [])
  //
  const joinRoom = useCallback(
    roomId => {
      if (!client) return

      navigate(BELKA, { roomId, tabBarVisible: false })
    },
    [navigate, client]
  )

  return (
    <ContainerWithBackground>
      <View style={styles.container}>
        <BelkaSegmentControl
          tabs={ROOMS_GAMES_TYPES}
          onChange={setActiveTab}
          additionalStyles={[styles.segmentedControl]}
          activeTabIndex={activeTab}
        />
        <>
          {rooms.length ? (
            <RoomsList onItemPress={joinRoom} rooms={rooms} />
          ) : (
            <Text>No rooms available</Text>
          )}
          <Button
            title="update rooms"
            style={styles.updateRoomButton}
            color="red"
            // onPress={updateRooms}
          />
          <Button
            title="show modal"
            style={styles.updateRoomButton}
            onPress={() => setShowModal(true)}
          />
          <GameOverModal open={showModal} closeCallback={() => setShowModal(false)} />
        </>
      </View>
    </ContainerWithBackground>
  )
})
