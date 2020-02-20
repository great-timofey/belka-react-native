import { createReducer } from '@utils/createReducer'

import * as TYPES from './types'

const initState = {
  error: null,
}

const setErrorHandler = (state, error) => ({ ...state, ...error })
const clearErrorHandler = () => ({ ...initState })

const handlersMap = {
  [TYPES.SET_ERROR]: setErrorHandler,
  [TYPES.CLEAR_ERROR]: clearErrorHandler,
}

export default createReducer(initState, handlersMap)
