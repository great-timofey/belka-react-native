import React, { memo, useCallback, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { NavigationActions, StackActions, NavigationEvents } from 'react-navigation'

import { useClientHook } from '@hooks'
import {
  CHAT_STACK,
  CREATE_GAME,
  PREPARATION,
  RATINGS_STACK,
  SETTINGS_STACK,
  SHOP_STACK,
} from '@navigation/names'
import {
  GameOverModal,
  ContainerWithBackground,
  BelkaSegmentedControl,
  RoomsList,
  BelkaButton,
} from '@components'

import styles from './styles'
import { ROOMS_GAMES_TYPES } from './constants'

export const Rooms = memo(function() {
  const client = useClientHook()
  const { navigate, dispatch } = useNavigation()

  const [showModal, setShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [rooms, setRooms] = useState([])

  const updateRooms = useCallback(() => {
    if (!client) return

    async function getRooms() {
      const newRooms = await client.getAvailableRooms()
      if (newRooms && newRooms.length) {
        setRooms(
          newRooms.map(
            ({ clients, clientsData, locked, maxClients, name, roomId, options, ...rest }) => ({
              bet: 100,
              clients: clientsData || clients,
              maxClients,
              name,
              roomId,
              locked,
              options,
              ...rest,
            }),
          ),
        )
      }
    }

    getRooms()
  }, [client])

  useEffect(updateRooms, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateRooms()
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [updateRooms])

  const joinRoom = useCallback(
    roomId => {
      if (!client) return

      navigate(PREPARATION, { roomId })
    },
    [navigate, client],
  )

  return (
    <ContainerWithBackground>
      <NavigationEvents
        onDidBlur={payload => {
          const route = payload.action.routeName
          const otherStacks = [RATINGS_STACK, SETTINGS_STACK, CHAT_STACK, SHOP_STACK]

          if (otherStacks.includes(route)) {
            const routeName = route.slice(0, route.indexOf('_'))
            dispatch(StackActions.popToTop({ immediate: true }))
            dispatch(
              NavigationActions.navigate({
                routeName,
              }),
            )
          }
        }}
      />
      <View style={styles.container}>
        <BelkaSegmentedControl
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
          <BelkaButton
            additionalStyles={[styles.createRoom]}
            title="Создать игру"
            onPress={() => navigate(CREATE_GAME)}
          />
          <GameOverModal open={showModal} closeCallback={() => setShowModal(false)} />
        </>
      </View>
    </ContainerWithBackground>
  )
})
