const initState = {
  objects: {},
  clients: {},
  players: [],
  hand: {},
  actions: [],
  room: {}
}

function belkaGameReducer(state = initState, action) {
  switch (action.type) {
    case 'INIT_ROOM':
      const { room } = action
      return { ...state, room }
    case 'MESSAGE_OBJECT':
      const { object } = action
      return { ...state, hand: { ...state.hand, [object.id]: object } }
    case 'MESSAGE_ACTIONS':
      const { actions } = action
      return { ...state, actions }
    case 'ADD_OBJECT':
      const { obj: newObject } = action
      return { ...state, objects: { ...state.objects, [newObject.id]: newObject } }
    case 'UPDATE_OBJECT':
      const { key, obj: updatedObject } = action
      return { ...state, objects: { ...state.objects, [key]: updatedObject } }
    case 'ADD_ClIENT':
      const { sessionId, playerId: data } = action
      return { ...state, clients: { ...state.clients, [sessionId]: data } }
    case 'REMOVE_CLIENT':
      const { sessionId: clientId } = action
      return { ...state, clients: { ...state.clients, [clientId]: undefined } }
    case 'ADD_PLAYER':
      const { playerId } = action
      return { ...state, players: [...state.players, playerId] }
    case 'REMOVE_PLAYER':
      const { index } = action
      const players = state.players.splice(index, 1)
      return { ...state, players }
    default:
      return state
  }
}

export default belkaGameReducer
