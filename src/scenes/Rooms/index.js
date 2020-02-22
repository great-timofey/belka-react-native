import React, { memo, useCallback, useState, useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { NavigationActions, StackActions, NavigationEvents } from 'react-navigation'
import { useDispatch } from 'react-redux'

import { useColyseusClient } from '@hooks'
import {
  CHAT_STACK,
  CREATE_GAME,
  RATINGS_STACK,
  SETTINGS_STACK,
  SHOP_STACK,
} from '@navigation/names'
import { ContainerWithBackground, BelkaSegmentedControl, RoomsList, BelkaButton } from '@components'
import { joinRoom } from '@redux/belkaGame/actions'

import styles from './styles'
import { ROOMS_GAMES_TYPES } from './constants'

export const Rooms = memo(function() {
  const client = useColyseusClient()
  const { navigate, dispatch } = useNavigation()
  const reduxDispatch = useDispatch()

  const [activeTab, setActiveTab] = useState(0)
  const [rooms, setRooms] = useState([])

  const updateRooms = useCallback(() => {
    if (!client) return

    async function getRooms() {
      const newRooms = await client.getAvailableRooms()
      if (newRooms) {
        setRooms(newRooms)
      }
    }

    getRooms()
  }, [client])

  useEffect(updateRooms, [])

  useEffect(() => {
    const interval = setInterval(() => {
      updateRooms()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [updateRooms])

  const onJoinRoom = useCallback(
    roomId => {
      if (!client) return

      reduxDispatch(joinRoom({ roomId }))
    },
    [client, reduxDispatch],
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
          <RoomsList onItemPress={onJoinRoom} rooms={rooms} />
          <BelkaButton
            additionalStyles={[styles.createRoom]}
            title="Создать игру"
            onPress={() => navigate(CREATE_GAME)}
          />
        </>
      </View>
    </ContainerWithBackground>
  )
})
