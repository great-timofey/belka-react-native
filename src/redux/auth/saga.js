import AsyncStorage from '@react-native-community/async-storage'
//  eslint-disable-next-line
import { takeEvery } from '@redux-saga/core/effects'

import { signIn, signUp, setAuthToken, logout, clearAuthToken } from '@services/auth'

import * as TYPES from './types'

function* signInSaga({ payload }) {
  try {
    const { data } = yield signIn(payload)
    // console.log(JSON.stringify(response, null, 2))
    if (data && data.token) {
      const { token } = data
      yield setAuthToken(token)
      yield AsyncStorage.setItem('token', token)
      console.log('authorization success')
    }
  } catch (err) {
    console.log(err)
  }
}

function* signUpSaga({ payload }) {
  try {
    const { token } = yield signUp(payload)
    yield setAuthToken(token)
    yield AsyncStorage.setItem('token', token)
    console.log('signup success')
  } catch (err) {
    console.log(err)
  }
}

function* logoutSaga() {
  try {
    yield logout()
    yield clearAuthToken()
    yield AsyncStorage.removeItem('token')
    console.log('logout success')
  } catch (err) {
    console.log(err)
  }
}

function* rootSaga() {
  yield takeEvery(TYPES.SIGN_IN, signInSaga)
  yield takeEvery(TYPES.SIGN_UP, signUpSaga)
  yield takeEvery(TYPES.LOGOUT, logoutSaga)
}

export default rootSaga
