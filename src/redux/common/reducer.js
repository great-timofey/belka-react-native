import { createReducer } from '@utils/createReducer'

import * as TYPES from './types'

const initState = {
  error: null,
  bet: 0,
}

const setErrorHandler = (state, error) => ({ ...state, ...error })
const clearErrorHandler = () => ({ ...initState })

const setBetHandler = (state, { bet }) => ({ ...state, bet })

const handlersMap = {
  [TYPES.SET_ERROR]: setErrorHandler,
  [TYPES.CLEAR_ERROR]: clearErrorHandler,
  [TYPES.SET_BET]: setBetHandler,
}

export default createReducer(initState, handlersMap)
