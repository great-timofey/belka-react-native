import { Buffer } from 'buffer'

import React from 'react'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { configureStore } from './redux'
import { AppNavigator } from './navigation'

// eslint-disable-next-line no-undef
window.localStorage = AsyncStorage
global.Buffer = Buffer

console.disableYellowBox = true

const { store, persistor } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App
