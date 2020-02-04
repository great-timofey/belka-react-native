import React, { memo } from 'react'
import { ImageBackground } from 'react-native'

import { headerBackground } from '@global/images'

import styles from './styles'

export const Header = memo(function({ children }) {
  return (
    <ImageBackground style={styles.container} source={headerBackground}>
      {children}
    </ImageBackground>
  )
})
