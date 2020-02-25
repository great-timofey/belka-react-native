import env from 'react-native-config'
import { Client } from 'colyseus.js'
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

const client = new Client(`${env.API_WEBSOCKET_PROTOCOL}://${env.API_HOST}`)
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

    return () => {
      room.leave()
    }
  })
}

const joinRoom = (roomId, token) => {
  return new Promise(resolve => {
    client
      .joinById(roomId, { token })
      .then(room => {
        resolve(room)
      })
      .catch(err => console.log('error in joinRoom', err))
  })
}

// const reconnectRoom = (roomId, sessionId, token) => {
//   return new Promise(resolve => {
//     client
//       .reconnect(roomId, sessionId)
//       .then(room => {
//         resolve(room)
//       })
//       .catch(err => console.log('error while reconnecting', err) || joinRoom(roomId, token))
//   })
// }
//
function* leaveRoomWorker() {
  try {
    console.log('leaving room')
    if (roomLeave) {
      console.log('roomLeave is set, leaving...')
      yield call(roomLeave)
    } else {
      console.log('roomLeave isnt set!')
    }
  } catch (err) {
    console.log('error in leaveRoomWorker', err)
  } finally {
    yield put(resetGame())
    NavigationService.navigate(ROOMS)
  }
}

function* socketWorker(room) {
  try {
    yield put(initRoom(room))
    const socketChannel = yield call(createRoomChannel, room)

    while (true) {
      const payload = yield take(socketChannel)
      yield put(payload)
    }
  } catch (error) {
    console.log('error in socketWorker', error)
    yield* leaveRoomWorker()
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

const sendSagaWorker = function*() {
  yield takeEvery(TYPES.ROOM_ADD_BOT, addBotSaga)
  yield takeEvery(TYPES.ROOM_ADD_ACTION, addActionSaga)
}

const createRoomSaga = function*({ payload }) {
  try {
    const token = yield AsyncStorage.getItem('token')
    yield fork(sendSagaWorker)
    const createdRoom = yield client.create('belka', { token, room: { ...payload } })
    // yield AsyncStorage.setItem('sessionId', createdRoom.sessionId)
    NavigationService.navigate(PREPARATION)
    yield* socketWorker(createdRoom)
  } catch (e) {
    console.log('error in createRoomSaga', e)
    yield* leaveRoomWorker()
  }
}

function* joinRoomSaga({ payload }) {
  try {
    const { roomId } = payload
    const token = yield AsyncStorage.getItem('token')
    yield fork(sendSagaWorker)
    // const existedSessionId = yield AsyncStorage.getItem('sessionId')
    // let room
    // if (existedSessionId) {
    //   room = yield call(reconnectRoom, roomId, existedSessionId)
    // } else {
    const room = yield call(joinRoom, roomId, token)
    // }
    NavigationService.navigate(PREPARATION)
    yield* socketWorker(room)
  } catch (e) {
    console.log('error in joinRoomSaga', e)
    yield* leaveRoomWorker()
  }
}

//  TODO: reconnect on session id

const rootSaga = function*() {
  yield takeEvery(TYPES.JOIN_ROOM, joinRoomSaga)
  yield takeEvery(TYPES.CREATE_ROOM, createRoomSaga)
  yield takeEvery(TYPES.LEAVE_ROOM, leaveRoomWorker)
}

export default rootSaga
