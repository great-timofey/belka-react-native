import React, { memo, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useClientHook } from '../hooks/useClientHook'
import { useRoomHook } from '../hooks/useRoomHook'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import * as ACTIONS from '../redux/belkaGame/actions'
import * as Colyseus from 'colyseus.js'
import { store } from '../redux'

async function initRoom(roomId) {
  const client = new Colyseus.Client('ws://belkagame.herokuapp.com')
  const room = await client.joinById(roomId)

  room.send({ type: 'name', data: client.id })
  AsyncStorage.setItem('sessionId', room.sessionId)
  AsyncStorage.setItem('roomId', room.id)

  room.onMessage(message => {
    if (message.type === 'object') {
      store.dispatch({ type: ACTIONS.GET_MESSAGE_OBJECT, object: message.data })
    } else if (message.type === 'actions') {
      store.dispatch({ type: ACTIONS.GET_MESSAGE_ACTIONS, actions: message.data })
    }
  })

  room.state.objects.onAdd = async obj => await store.dispatch({ type: ACTIONS.ADD_OBJECT, obj })
  room.state.objects.onChange = async (obj, key) =>
    await store.dispatch({ type: ACTIONS.UPDATE_OBJECT, key, obj })
  room.state.clients.onAdd = async (playerId, sessionId) =>
    console.log(playerId, sessionId) ||
    (await store.dispatch({ type: ACTIONS.ADD_CLIENT, sessionId, playerId }))
  room.state.clients.onRemove = async (player, sessionId) =>
    await store.dispatch({ type: ACTIONS.REMOVE_CLIENT, sessionId })
  room.state.players.onAdd = async playerId =>
    await store.dispatch({ type: ACTIONS.ADD_PLAYER, playerId })
  room.state.players.onRemove = async index =>
    await store.dispatch({ type: ACTIONS.REMOVE_PLAYER, index })

  store.dispatch({ type: ACTIONS.INIT_ROOM, room })
  await Promise.resolve()
}

export const BelkaGame = memo(function(props) {
  const [loading, setLoading] = useState(true)
  const { objects, clients, players, hand, actions, room: savedRoom } = useSelector(
    store => store.belkaGame
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (!props.navigation) return
    const roomId = props.navigation.getParam('roomId')

    if (!roomId) return

    async function init() {
      await initRoom(roomId)
      setLoading(false)
    }

    init()
  }, [props.navigation, dispatch])

  return loading ? (
    <View>
      <Text>Game is loading...</Text>
    </View>
  ) : (
    console.log(objects, clients, players, hand, actions, savedRoom) || (
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <Text>ok</Text>
      </View>
    )
  )
})
