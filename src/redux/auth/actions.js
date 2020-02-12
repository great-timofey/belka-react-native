import * as TYPES from './types'

export const signIn = ({ email, password }) => ({
  type: TYPES.SIGN_IN,
  payload: { email, password },
})

export const signUp = ({ email, name, password }) => ({
  type: TYPES.SIGN_UP,
  payload: { email, password, name },
})

export const logout = () => ({
  type: TYPES.LOGOUT,
})
