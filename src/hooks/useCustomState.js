import { useReducer } from 'react'

export function useCustomState(initialState) {
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), initialState)

  return [state, dispatch]
}
