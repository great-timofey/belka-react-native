import React, { memo, useEffect, useState } from 'react'
import { Image } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import AsyncStorage from '@react-native-community/async-storage'

import { ContainerWithBackground } from '@components/ContainerWithBackground'
import { bootsplashLogo } from '@global/images'
import * as NavigationService from '@navigation/navigationService'
import { AUTHORIZED_STACK, UNATHORIZED_STACK } from '@navigation/names'

import styles from './styles'

export const AuthLoading = memo(function() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    RNBootSplash.hide({ duration: 250 })
  }, [authenticated])

  useEffect(() => {
    async function getInitialNavigationScreen() {
      const token = await AsyncStorage.getItem('token')
      setAuthenticated(true)
      if (token) {
        NavigationService.navigate(AUTHORIZED_STACK)
      } else {
        NavigationService.navigate(UNATHORIZED_STACK)
      }
    }

    getInitialNavigationScreen()
  }, [])

  return (
    <ContainerWithBackground size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} />
    </ContainerWithBackground>
  )
})
