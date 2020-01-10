import * as ACTIONS from './actions'

const initState = {
  objects: {},
  clients: {},
  players: [],
  hand: {},
  actions: [],
  room: null
}

function belkaGameReducer(state = initState, action) {
  switch (action.type) {
    case ACTIONS.INIT_ROOM:
      const { room } = action
      return { ...state, room }
    case ACTIONS.GET_MESSAGE_OBJECT:
      const { object } = action
      return { ...state, hand: { ...state.hand, [object.id]: object } }
    case ACTIONS.GET_MESSAGE_ACTIONS:
      const { actions } = action
      return { ...state, actions }
    case ACTIONS.ADD_OBJECT:
      const { obj: newObject } = action
      return { ...state, objects: { ...state.objects, [newObject.id]: newObject } }
    case ACTIONS.UPDATE_OBJECT:
      const { key, obj: updatedObject } = action
      return { ...state, objects: { ...state.objects, [key]: updatedObject } }
    case ACTIONS.ADD_CLIENT:
      const { sessionId, playerId: data } = action
      return { ...state, clients: { ...state.clients, [sessionId]: data } }
    case ACTIONS.REMOVE_CLIENT:
      const { sessionId: clientId } = action
      return { ...state, clients: { ...state.clients, [clientId]: undefined } }
    case ACTIONS.ADD_PLAYER:
      const { playerId } = action
      return { ...state, players: [...state.players, playerId] }
    case ACTIONS.REMOVE_PLAYER:
      const { index } = action
      const players = state.players.splice(index, 1)
      return { ...state, players }
    default:
      return state
  }
}

export default belkaGameReducer
