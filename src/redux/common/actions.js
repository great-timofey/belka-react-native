import * as TYPES from './types'

export const setError = error => ({ type: TYPES.SET_ERROR, payload: { error } })

export const clearError = () => ({
  type: TYPES.CLEAR_ERROR,
})

export const setBet = bet => ({ type: TYPES.SET_BET, payload: { bet } })
