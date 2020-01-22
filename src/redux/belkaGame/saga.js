import * as Colyseus from 'colyseus.js'
import { eventChannel } from 'redux-saga'
// import AsyncStorage from '@react-native-community/async-storage'
import { take, takeEvery, put, call, fork } from 'redux-saga/effects'

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
  removePlayer
} from './actions'

const client = new Colyseus.Client('ws://belkagame.herokuapp.com')
let roomSend
let roomLeave

function createRoomChannel(room) {
  return eventChannel(emit => {
    room.onMessage(message => {
      if (message.type === 'object') {
        // emit({ type: ACTIONS.GET_MESSAGE_OBJECT, object: message.data })
        emit(setMessageObject(message.data))
      } else if (message.type === 'actions') {
        // emit({ type: ACTIONS.GET_MESSAGE_ACTIONS, actions: message.data })
        emit(setMessageActions(message.data))
      }
    })

    // room.state.objects.onAdd = obj => emit({ type: ACTIONS.ADD_OBJECT, obj })
    room.state.objects.onAdd = obj => emit(addObject(obj))
    // room.state.objects.onChange = (obj, key) => emit({ type: ACTIONS.UPDATE_OBJECT, key, obj })
    room.state.objects.onChange = (obj, key) => emit(updateObject(obj, key))
    // room.state.clients.onAdd = (playerId, sessionId) =>
    //   emit({ type: ACTIONS.ADD_CLIENT, sessionId, playerId })
    room.state.clients.onAdd = (playerId, sessionId) => emit(addClient(playerId, sessionId))
    // room.state.clients.onRemove = (player, sessionId) =>
    //   emit({ type: ACTIONS.REMOVE_CLIENT, sessionId })
    room.state.clients.onRemove = (player, sessionId) => emit(removeClient(sessionId))
    // room.state.players.onAdd = playerId => emit({ type: ACTIONS.ADD_PLAYER, playerId })
    room.state.players.onAdd = playerId => emit(addPlayer(playerId))
    // room.state.players.onRemove = index => emit({ type: ACTIONS.REMOVE_PLAYER, index })
    room.state.players.onRemove = index => emit(removePlayer(index))

    roomSend = msg => room.send(msg)
    roomLeave = () => room.leave()

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

// const reconnect = (roomId, sessionId) => {
//   return new Promise(resolve => {
//     client.reconnect(roomId, sessionId).then(room => {
//       resolve(room)
//     })
//   })
// }

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

const listenServerSaga = function*(roomId) {
  try {
    const room = yield call(connect, roomId)
    // yield put({ type: ACTIONS.INIT_ROOM, room })
    yield put(initRoom(room))
    const socketChannel = yield call(createRoomChannel, room)

    while (true) {
      const payload = yield take(socketChannel)
      yield put(payload)
    }
  } catch (error) {
    if (roomLeave) {
      console.log('leave')
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

const sendSagaWorker = function*() {
  yield takeEvery(TYPES.ROOM_ADD_BOT, addBotSaga)
  yield takeEvery(TYPES.ROOM_ADD_ACTION, addActionSaga)
}

const startStopChannel = function*() {
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

export default startStopChannel
