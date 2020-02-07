import { createReducer } from '@utils/createReducer'

import * as TYPES from './types'

const initState = {
  objects: {},
  clients: {},
  players: [],
  hand: {},
  actions: [],
  room: null,
}

const initRoomHandler = (state, room) => ({ ...state, room })
const setMessageObjectHandler = (state, object) => ({
  ...state,
  hand: { ...state.hand, [object.id]: object },
})
const setMessageActionsHandler = (state, actions) => ({ ...state, actions })
const addObjectHandler = (state, newObject) => ({
  ...state,
  objects: { ...state.objects, [newObject.id]: newObject },
})
const updateObjectHandler = (state, { key, object }) => ({
  ...state,
  objects: { ...state.objects, [key]: object },
})
const addClientHandler = (state, { playerId, sessionId }) => ({
  ...state,
  clients: { ...state.clients, [sessionId]: playerId },
})
const removeClientHandler = (state, clientId) => ({
  ...state,
  clients: { ...state.clients, [clientId]: undefined },
})
const addPlayerHandler = (state, player) => ({ ...state, players: [...state.players, player] })
const removePlayerHandler = (state, playerIndex) => ({
  ...state,
  players: state.players.filter((_, index) => index !== playerIndex),
})

const handlersMap = {
  [TYPES.INIT_ROOM]: initRoomHandler,
  [TYPES.SET_MESSAGE_OBJECT]: setMessageObjectHandler,
  [TYPES.SET_MESSAGE_ACTIONS]: setMessageActionsHandler,
  [TYPES.ADD_OBJECT]: addObjectHandler,
  [TYPES.UPDATE_OBJECT]: updateObjectHandler,
  [TYPES.ADD_CLIENT]: addClientHandler,
  [TYPES.REMOVE_CLIENT]: removeClientHandler,
  [TYPES.ADD_PLAYER]: addPlayerHandler,
  [TYPES.REMOVE_PLAYER]: removePlayerHandler,
}

export default createReducer(initState, handlersMap)
