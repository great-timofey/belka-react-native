import React, { memo } from 'react'
import { View } from 'react-native'

import styles from './styles'

export const Player = memo(function({ children, index }) {
  return <View style={[styles.common, styles[index]]}>{children}</View>
})
