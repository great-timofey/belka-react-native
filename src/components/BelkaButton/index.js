import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'

import styles from './styles'

export const BelkaButton = memo(function({
  title,
  onPress,
  children,
  appearance = 'Primary',
  additionalStyles = [],
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[`button${appearance}`], ...additionalStyles]}
      onPress={onPress}
    >
      <LinearGradient {...gradients.buttons[appearance]} style={styles.gradient}>
        {title ? (
          <Text style={[styles.title, styles[`title${appearance}`]]}>{title}</Text>
        ) : (
          children
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
})
