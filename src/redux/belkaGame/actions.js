import * as TYPES from './types'

export const initRoom = room => ({ type: TYPES.INIT_ROOM, payload: room })
export const joinRoom = ({ roomId }) => ({ type: TYPES.JOIN_ROOM, payload: { roomId } })
export const setMessageObject = object => ({ type: TYPES.SET_MESSAGE_OBJECT, payload: object })
export const setMessageActions = actions => ({ type: TYPES.SET_MESSAGE_ACTIONS, payload: actions })
export const addObject = object => ({ type: TYPES.ADD_OBJECT, payload: object })
export const updateObject = (object, key) => ({
  type: TYPES.UPDATE_OBJECT,
  payload: { object, key },
})
export const addClient = (playerId, sessionId) => ({
  type: TYPES.ADD_CLIENT,
  payload: { playerId, sessionId },
})
export const removeClient = clientId => ({ type: TYPES.REMOVE_CLIENT, payload: clientId })
export const addPlayer = player => ({ type: TYPES.ADD_PLAYER, payload: player })
export const removePlayer = index => ({ type: TYPES.REMOVE_PLAYER, payload: index })
export const startChannel = ({ roomId, needJoin }) => ({
  type: TYPES.START_CHANNEL,
  payload: { roomId, needJoin },
})
export const roomAddBot = () => ({ type: TYPES.ROOM_ADD_BOT })
export const roomAddAction = actionId => ({ type: TYPES.ROOM_ADD_ACTION, payload: actionId })
export const createRoom = ({ ...params }) => ({
  type: TYPES.CREATE_ROOM,
  payload: { ...params },
})
export const leaveRoom = () => ({ type: TYPES.LEAVE_ROOM })
export const resetGame = () => ({ type: TYPES.RESET_GAME })
