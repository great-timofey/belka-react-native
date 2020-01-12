export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (!action || !action.type) {
    return state
  }

  const handler = handlers[action.type]
  if (typeof handler === 'function') {
    return handler(state, action.payload)
  }

  return state
}
