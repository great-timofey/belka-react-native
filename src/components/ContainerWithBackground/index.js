import React, { memo } from 'react'
import { ImageBackground } from 'react-native'

import { backgroundCenter, backgroundFullscreen } from '@global/images'

import styles from './styles'

export const ContainerWithBackground = memo(function({
  children,
  size = 'center',
  additionalStyles = []
}) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={[styles.container, size === 'center' && styles.containerPadded, ...additionalStyles]}
      source={size === 'center' ? backgroundCenter : backgroundFullscreen}
    >
      {children}
    </ImageBackground>
  )
})
