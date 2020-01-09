import React from 'react'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'
import { store } from './redux'
import { AppNavigator } from './navigation'

import { Buffer } from 'buffer'

// eslint-disable-next-line no-undef
window.localStorage = AsyncStorage
global.Buffer = Buffer

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#52146C" />
        <AppNavigator />
      </Provider>
    </>
  )
}

export default App
