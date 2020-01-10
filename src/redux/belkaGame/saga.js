import { eventChannel } from 'redux-saga'
import { take, takeEvery, put, call, fork } from 'redux-saga/effects'
import * as Colyseus from 'colyseus.js'
import AsyncStorage from '@react-native-community/async-storage'

import * as ACTIONS from './actions'

const client = new Colyseus.Client('ws://belkagame.herokuapp.com')
let roomSend
let roomLeave

function createRoomChannel(room) {
  return eventChannel(emit => {
    room.onMessage(message => {
      if (message.type === 'object') {
        emit({ type: ACTIONS.GET_MESSAGE_OBJECT, object: message.data })
      } else if (message.type === 'actions') {
        emit({ type: ACTIONS.GET_MESSAGE_ACTIONS, actions: message.data })
      }
    })

    room.state.objects.onAdd = obj => emit({ type: ACTIONS.ADD_OBJECT, obj })
    room.state.objects.onChange = (obj, key) => emit({ type: ACTIONS.UPDATE_OBJECT, key, obj })
    room.state.clients.onAdd = (playerId, sessionId) =>
      emit({ type: ACTIONS.ADD_CLIENT, sessionId, playerId })
    room.state.clients.onRemove = (player, sessionId) =>
      emit({ type: ACTIONS.REMOVE_CLIENT, sessionId })
    room.state.players.onAdd = playerId => emit({ type: ACTIONS.ADD_PLAYER, playerId })
    room.state.players.onRemove = index => emit({ type: ACTIONS.REMOVE_PLAYER, index })

    roomSend = args => room.send(args)
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

const reconnect = (roomId, sessionId) => {
  return new Promise(resolve => {
    client.reconnect(roomId, sessionId).then(room => {
      resolve(room)
    })
  })
}

const reconnectSaga = function*(roomId) {
  try {
    const sessionId = yield AsyncStorage.getItem('sessionId')
    const room = yield call(reconnect, roomId, sessionId)
    const socketChannel = yield call(createRoomChannel, room)

    for (let i = 0; i < 3; i += 1) {
      const payload = yield take(socketChannel)
      yield put(payload)
    }
  } catch (error) {
    console.log('reconnection error')
  }
}

const listenServerSaga = function*(roomId) {
  try {
    const room = yield call(connect, roomId)
    yield put({ type: ACTIONS.INIT_ROOM, room })
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
    console.log(r)
  }
}

const addActionSaga = function*(action) {
  try {
    yield call(roomSend, { type: 'action', data: { actionId: action.data.actionId } })
  } catch (e) {
    console.log(e)
  }
}

const sendSagaWorker = function*() {
  yield takeEvery(ACTIONS.ROOM_ADD_BOT, addBotSaga)
  yield takeEvery(ACTIONS.ROOM_ADD_ACTION, addActionSaga)
}

const startStopChannel = function*() {
  while (true) {
    try {
      const { roomId } = yield take(ACTIONS.START_CHANNEL)
      yield fork(sendSagaWorker)
      yield call(listenServerSaga, roomId)
    } catch (e) {
      if (roomLeave) {
        console.log('leave')
        yield call(roomLeave)
      }
    }
  }
}

export default startStopChannel
