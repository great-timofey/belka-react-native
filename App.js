import React from 'react'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'
import { Buffer } from 'buffer'

import { configureStore } from './src/redux'
import { AppNavigator } from './src/navigation'

// eslint-disable-next-line no-undef
window.localStorage = AsyncStorage
global.Buffer = Buffer

const { store, persistor } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <AppNavigator />
    </Provider>
  )
}

export default App
