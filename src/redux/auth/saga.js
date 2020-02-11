import AsyncStorage from '@react-native-community/async-storage'
//  eslint-disable-next-line
import { takeEvery, put } from '@redux-saga/core/effects'

import { signIn, signUp, setAuthToken, clearAuthToken } from '@services/auth'
import * as NavigationService from '@navigation/navigationService'
import { AUTHORIZED_STACK, UNATHORIZED_STACK } from '@navigation/names'

import { setError } from '../common/actions'

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
      NavigationService.navigate(AUTHORIZED_STACK)
    }
  } catch (err) {
    console.log(err)
    yield put(setError(err))
  }
}

function* signUpSaga({ payload }) {
  try {
    const { token } = yield signUp(payload)
    yield setAuthToken(token)
    yield AsyncStorage.setItem('token', token)
    console.log('signup success')
    NavigationService.navigate(AUTHORIZED_STACK)
  } catch (err) {
    console.log(err)
    yield put(setError(err))
  }
}

function* logoutSaga() {
  try {
    // yield logout()
    yield clearAuthToken()
    yield AsyncStorage.removeItem('token')
    NavigationService.navigate(UNATHORIZED_STACK)
    console.log('logout success')
  } catch (err) {
    console.log(err)
    yield put(setError(err))
  }
}

function* rootSaga() {
  yield takeEvery(TYPES.SIGN_IN, signInSaga)
  yield takeEvery(TYPES.SIGN_UP, signUpSaga)
  yield takeEvery(TYPES.LOGOUT, logoutSaga)
}

export default rootSaga
