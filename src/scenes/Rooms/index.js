import React, { memo, useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import { useClientHook } from '@hooks/useClientHook'
import { BELKA } from '@navigation/names'
import {
  GameOverModal,
  ContainerWithBackground,
  BelkaSegmentedControl,
  RoomsList,
  BelkaButton
} from '@components'

import styles from './styles'
import { ROOMS_GAMES_TYPES } from './constants'
import { ROOMS_MOCKS } from './mocks'

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
        <BelkaSegmentedControl
          tabs={ROOMS_GAMES_TYPES}
          onChange={setActiveTab}
          additionalStyles={[styles.segmentedControl]}
          activeTabIndex={activeTab}
        />
        <>
          {ROOMS_MOCKS.length ? (
            <RoomsList onItemPress={joinRoom} rooms={ROOMS_MOCKS} />
          ) : (
            <Text>No rooms available</Text>
          )}
          <BelkaButton additionalStyles={styles.createRoom} title="Создать игру" />
          {/* <Button */}
          {/*  title="update rooms" */}
          {/*  style={styles.updateRoomButton} */}
          {/*  color="red" */}
          {/*  // onPress={updateRooms} */}
          {/* /> */}
          {/* <Button */}
          {/*  title="show modal" */}
          {/*  style={styles.updateRoomButton} */}
          {/*  onPress={() => setShowModal(true)} */}
          {/* /> */}
          <GameOverModal open={showModal} closeCallback={() => setShowModal(false)} />
        </>
      </View>
    </ContainerWithBackground>
  )
})
