import AsyncStorage from '@react-native-community/async-storage'
//  eslint-disable-next-line
import { takeEvery, put } from '@redux-saga/core/effects'

import { signIn, signUp, setAuthToken, clearAuthToken } from '@services/auth'
import * as NavigationService from '@navigation/navigationService'
import { AUTHORIZED_STACK, UNATHORIZED_STACK } from '@navigation/names'
import { processError } from '@utils'

import { setError } from '../common/actions'

import * as TYPES from './types'

function* signInSaga({ payload }) {
  try {
    const { data } = yield signIn(payload)
    if (data && data.token) {
      const { token } = data
      yield setAuthToken(token)
      yield AsyncStorage.setItem('token', token)
      console.log('authorization success')
      NavigationService.navigate(AUTHORIZED_STACK)
    }
  } catch (err) {
    console.dir(err)
    const [status, message] = processError(err)
    if (status === 400) {
      yield put(setError('Неверный email или пароль'))
    } else {
      yield put(setError(message))
    }
  }
}

function* signUpSaga({ payload }) {
  try {
    const { data } = yield signUp(payload)
    if (data && data.token) {
      const { token } = data
      yield setAuthToken(token)
      yield AsyncStorage.setItem('token', token)
      NavigationService.navigate(AUTHORIZED_STACK)
      console.log('signup success')
    }
  } catch (err) {
    const [status, message] = processError(err)
    if (status === 403) {
      yield put(setError('Пользователь с таким email уже существует'))
    } else {
      yield put(setError(message))
    }
  }
}

function* logoutSaga() {
  try {
    // yield logout()
    yield clearAuthToken()
    yield AsyncStorage.removeItem('token')
    yield AsyncStorage.removeItem('sessionId')
    yield AsyncStorage.removeItem('roomId')
    NavigationService.navigate(UNATHORIZED_STACK)
    console.log('logout success')
  } catch (err) {
    console.dir(err)
    const [, message] = processError(err)
    yield put(setError(message))
  }
}

function* rootSaga() {
  yield takeEvery(TYPES.SIGN_IN, signInSaga)
  yield takeEvery(TYPES.SIGN_UP, signUpSaga)
  yield takeEvery(TYPES.LOGOUT, logoutSaga)
}

export default rootSaga
