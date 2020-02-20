import * as TYPES from './types'

export const signIn = ({ email, password }) => ({
  type: TYPES.SIGN_IN_REQUEST,
  payload: { email, password },
})

export const signInSuccess = ({ email, password, name }) => ({
  type: TYPES.SIGN_IN_SUCCESS,
  payload: { email, password, name },
})

export const signUp = ({ email, name, password }) => ({
  type: TYPES.SIGN_UP_REQUEST,
  payload: { email, password, name },
})

export const signUpSuccess = ({ email, name, password }) => ({
  type: TYPES.SIGN_UP_SUCCESS,
  payload: { email, password, name },
})

export const logout = () => ({
  type: TYPES.LOGOUT,
})
