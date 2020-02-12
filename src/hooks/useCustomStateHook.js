import { useReducer } from 'react'

export function useCustomStateHook(initialState) {
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), initialState)

  return [state, dispatch]
}
