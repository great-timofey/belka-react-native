import { createReducer } from '@utils'

import * as TYPES from './types'

const initState = {
  email: '',
  name: '',
  id: '',
  created: '',
}

const authHandler = (state, data) => ({ ...state, ...data })
const logoutHandler = () => ({ ...initState })

const handlersMap = {
  [TYPES.SIGN_IN_SUCCESS]: authHandler,
  [TYPES.SIGN_UP_SUCCESS]: authHandler,
  [TYPES.LOGOUT]: logoutHandler,
}

export default createReducer(initState, handlersMap)
