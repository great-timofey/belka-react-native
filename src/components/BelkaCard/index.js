import React, { memo } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'

import styles from './styles'

export const BelkaCard = memo(function({ additionalStyles = [], children }) {
  return (
    <LinearGradient {...gradients.baseCard} style={[styles.gradient, ...additionalStyles]}>
      {children}
    </LinearGradient>
  )
})
