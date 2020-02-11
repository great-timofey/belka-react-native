import { Buffer } from 'buffer'

import React from 'react'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'

import { configureStore } from './redux'
import { AppNavigator } from './navigation'

// eslint-disable-next-line no-undef
window.localStorage = AsyncStorage
global.Buffer = Buffer

console.disableYellowBox = true

const { store } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <AppNavigator />
    </Provider>
  )
}

export default App
