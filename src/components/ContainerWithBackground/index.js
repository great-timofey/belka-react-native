import React, { memo } from 'react'
import { ImageBackground } from 'react-native'

import { backgroundCenter, backgroundFullscreen } from '@global/images'

import styles from './styles'

export const ContainerWithBackground = memo(function({ children, size = 'center' }) {
  return (
    <ImageBackground
      style={[styles.container, size === 'center' && styles.containerPadded]}
      source={size === 'center' ? backgroundCenter : backgroundFullscreen}
    >
      {children}
    </ImageBackground>
  )
})
