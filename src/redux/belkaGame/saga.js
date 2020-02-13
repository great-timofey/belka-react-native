import env from 'react-native-config'
import * as Colyseus from 'colyseus.js'
import { eventChannel } from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage'
import { take, takeEvery, put, call, fork } from 'redux-saga/effects'

import * as NavigationService from '@navigation/navigationService'
import { PREPARATION, ROOMS } from '@navigation/names'

import * as TYPES from './types'
import {
  initRoom,
  setMessageObject,
  setMessageActions,
  addClient,
  removeClient,
  addObject,
  updateObject,
  addPlayer,
  removePlayer,
  resetGame,
} from './actions'

const client = new Colyseus.Client(`${env.API_WEBSOCKET_PROTOCOL}://${env.API_HOST}`)
let roomSend
let roomLeave

function createRoomChannel(room) {
  return eventChannel(emit => {
    room.onMessage(message => {
      if (message.type === 'object') {
        emit(setMessageObject(message.data))
      } else if (message.type === 'actions') {
        emit(setMessageActions(message.data))
      }
    })

    room.state.objects.onAdd = obj => emit(addObject(obj))
    room.state.objects.onChange = (obj, key) => emit(updateObject(obj, key))
    room.state.clients.onAdd = (playerId, sessionId) => emit(addClient(playerId, sessionId))
    room.state.clients.onRemove = (player, sessionId) => emit(removeClient(sessionId))
    room.state.players.onAdd = playerId => emit(addPlayer(playerId))
    room.state.players.onRemove = index => emit(removePlayer(index))

    roomSend = msg => room.send(msg)
    roomLeave = () => room.leave()

    return () => {}
  })
}

const connect = (roomId, token) => {
  return new Promise(resolve => {
    client.joinById(roomId, { token }).then(room => {
      resolve(room)
    })
  })
}
//
// const reconnect = (roomId, sessionId) => {
//   return new Promise(resolve => {
//     client.reconnect(roomId, sessionId).then(room => {
//       resolve(room)
//     })
//   })
// }

const listenServerSaga = function*(roomId) {
  try {
    const token = yield AsyncStorage.getItem('token')
    const room = yield call(connect, roomId, token)
    yield put(initRoom(room))
    const socketChannel = yield call(createRoomChannel, room)

    while (true) {
      const payload = yield take(socketChannel)
      yield put(payload)
    }
  } catch (error) {
    console.log(error)
    if (roomLeave) {
      console.log('error, leave room')
      yield call(roomLeave)
    }
  }
}

const addBotSaga = function*() {
  try {
    yield call(roomSend, { type: 'addbot' })
  } catch (e) {
    console.log(e)
  }
}

const addActionSaga = function*({ payload }) {
  try {
    yield call(roomSend, { type: 'action', data: { actionId: payload } })
  } catch (e) {
    console.log(e)
  }
}

const createRoomSaga = function*({ payload }) {
  try {
    const { name, ...rest } = payload
    const token = yield AsyncStorage.getItem('token')
    const { id, sessionId } = yield client.create('belka', { token, ...rest })
    yield AsyncStorage.setItem('roomId', id)
    yield AsyncStorage.setItem('sessionId', sessionId)
    NavigationService.navigate(PREPARATION, { roomId: id })
  } catch (e) {
    console.log(e)
  }
}

function* leaveRoomWorker() {
  try {
    console.log('leaving room')
    yield call(roomLeave)
    yield put(resetGame())
    NavigationService.navigate(ROOMS)
  } catch (err) {
    console.log(err)
    console.log('cannot leave')
  }
}

const sendSagaWorker = function*() {
  yield takeEvery(TYPES.ROOM_ADD_BOT, addBotSaga)
  yield takeEvery(TYPES.ROOM_ADD_ACTION, addActionSaga)
}

const startStopChannelSaga = function*() {
  while (true) {
    try {
      const { payload } = yield take(TYPES.START_CHANNEL)
      yield fork(sendSagaWorker)
      yield call(listenServerSaga, payload)
    } catch (e) {
      if (roomLeave) {
        console.log('leave')
        yield call(roomLeave)
      }
    }
  }
}

const rootSaga = function*() {
  yield fork(startStopChannelSaga)
  yield takeEvery(TYPES.CREATE_ROOM, createRoomSaga)
  yield takeEvery(TYPES.LEAVE_ROOM, leaveRoomWorker)
}

// const reconnectSaga = function*(roomId) {
//   try {
//     const sessionId = yield AsyncStorage.getItem('sessionId')
//     const room = yield call(reconnect, roomId, sessionId)
//     const socketChannel = yield call(createRoomChannel, room)
//
//     for (let i = 0; i < 3; i += 1) {
//       const payload = yield take(socketChannel)
//       yield put(payload)
//     }
//   } catch (error) {
//     console.log('reconnection error')
//   }
// }

export default rootSaga
