import AsyncStorage from '@react-native-community/async-storage'
//  eslint-disable-next-line
import { takeEvery, put } from '@redux-saga/core/effects'

import { signIn, signUp, setAuthToken, clearAuthToken } from '@services/auth'
import * as NavigationService from '@navigation/navigationService'
import { AUTHORIZED_STACK, UNATHORIZED_STACK } from '@navigation/names'
import { processError } from '@utils'

import { clearError, setError } from '../common/actions'

import * as TYPES from './types'
import { signInSuccess, signUpSuccess } from './actions'

function* signInSaga({ payload }) {
  try {
    yield clearError()
    const { data } = yield signIn(payload)
    if (data && data.token && data.user) {
      const { token, user } = data
      yield setAuthToken(token)
      yield AsyncStorage.setItem('token', token)
      yield put(signInSuccess({ ...user }))
      NavigationService.navigate(AUTHORIZED_STACK)
    }
  } catch (err) {
    console.log(err)
    const [status, defaultErrorMessage] = processError(err)
    if (status === 401) {
      yield put(setError('Неправильный логин или пароль!'))
    } else {
      yield put(setError(defaultErrorMessage))
    }
  }
}

function* signUpSaga({ payload }) {
  try {
    const { data } = yield signUp(payload)
    if (data && data.token) {
      const { token, user } = data
      yield setAuthToken(token)
      yield AsyncStorage.setItem('token', token)
      yield put(signUpSuccess({ ...user }))
      NavigationService.navigate(AUTHORIZED_STACK)
    }
  } catch (err) {
    const [status, defaultErrorMessage] = processError(err)
    if (status === 403) {
      yield put(setError('Пользователь с таким email уже существует'))
    } else {
      yield put(setError(defaultErrorMessage))
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
  yield takeEvery(TYPES.SIGN_IN_REQUEST, signInSaga)
  yield takeEvery(TYPES.SIGN_UP_REQUEST, signUpSaga)
  yield takeEvery(TYPES.LOGOUT, logoutSaga)
}

export default rootSaga
