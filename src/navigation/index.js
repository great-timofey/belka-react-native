import React, { useEffect, useRef } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { AUTHORIZED_STACK, UNATHORIZED_STACK } from '@navigation/names'

import RootNavigator from './config'
import * as NavigationService from './navigationService'

export const AppNavigator = () => {
  let ref = useRef(null)

  useEffect(() => {
    NavigationService.setNavigator(ref)
  }, [ref])

  useEffect(() => {
    async function getInitialNavigationScreen() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        NavigationService.navigate(AUTHORIZED_STACK)
      } else {
        NavigationService.navigate(UNATHORIZED_STACK)
      }
    }

    getInitialNavigationScreen()
  }, [])

  return <RootNavigator ref={node => (ref = node)} />
}
