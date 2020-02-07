import React, { memo } from 'react'
import { Image } from 'react-native'

import { ContainerWithBackground } from '@components/ContainerWithBackground'
import { bootsplashLogo } from '@global/images'

import styles from './styles'

export const AuthLoading = memo(function() {
  return (
    <ContainerWithBackground size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} />
    </ContainerWithBackground>
  )
})
