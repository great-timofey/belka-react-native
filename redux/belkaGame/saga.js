import { eventChannel } from 'redux-saga'
import { take, put, call } from 'redux-saga/effects'
import * as Colyseus from 'colyseus.js'
import { AsyncStorage } from 'react-native'

const client = new Colyseus.Client('ws://belkagame.herokuapp.com')

function createRoomChannel(room) {
  return eventChannel(emit => {
    room.onMessage(message => {
      if (message.type === 'object') {
        emit({ type: 'MESSAGE_OBJECT', object: message.data })
      } else if (message.type === 'actions') {
        emit({ type: 'MESSAGE_ACTIONS', actions: message.data })
      }
    })

    room.state.objects.onAdd = obj => emit({ type: 'ADD_OBJECT', obj })
    room.state.objects.onChange = (obj, key) => emit({ type: 'UPDATE_OBJECT', key, obj })
    room.state.clients.onAdd = (playerId, sessionId) =>
      emit({ type: 'ADD_ClIENT', sessionId, playerId })
    room.state.clients.onRemove = (player, sessionId) => emit({ type: 'REMOVE_CLIENT', sessionId })
    room.state.players.onAdd = playerId => emit({ type: 'ADD_PLAYER', playerId })
    room.state.players.onRemove = index => emit({ type: 'REMOVE_PLAYER', index })

    return () => {
      room.leave()
    }
  })
}

const connect = roomId => {
  return new Promise(resolve => {
    client.joinById(roomId).then(room => {
      resolve(room)
    })
  })
}

const reconnect = (roomId, sessionId) => {
  return new Promise(resolve => {
    client.reconnect(roomId, sessionId).then(room => {
      resolve(room)
    })
  })
}

const listenServerSaga = function*(roomId) {
  try {
    const room = yield call(connect, roomId)
    const socketChannel = yield call(createRoomChannel, room)

    while (true) {
      const payload = yield take(socketChannel)
      yield put(payload)
    }
  } catch (error) {
    console.log('trying reconnection')
    yield reconnectSaga(roomId)
  }
}

const reconnectSaga = function*(roomId) {
  try {
    const sessionId = yield AsyncStorage.getItem('sessionId')
    const room = yield call(reconnect, roomId, sessionId)
    const socketChannel = yield call(createRoomChannel, room)

    for (let i = 0; i < 3; i++) {
      const payload = yield take(socketChannel)
      yield put(payload)
    }
  } catch (error) {
    console.log('reconnection error')
  }
}

const startStopChannel = function*() {
  while (true) {
    const { roomId } = yield take('START_CHANNEL')
    yield call(listenServerSaga, roomId)
  }
}

export default startStopChannel
