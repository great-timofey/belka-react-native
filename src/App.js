import { Buffer } from 'buffer'

import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'
import RNBootSplash from 'react-native-bootsplash'

import { configureStore } from './redux'
import { AppNavigator } from './navigation'

// eslint-disable-next-line no-undef
window.localStorage = AsyncStorage
global.Buffer = Buffer

console.disableYellowBox = true

const { store } = configureStore()

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 })
  }, [])

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <AppNavigator />
    </Provider>
  )
}

export default App
