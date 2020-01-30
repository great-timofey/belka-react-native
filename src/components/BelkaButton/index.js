import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'

import styles from './styles'

export const BelkaButton = memo(function({
  primary = true,
  title,
  onPress,
  additionalStyles = []
}) {
  return (
    <TouchableOpacity
      style={[styles.button, primary ? styles.primaryButton : {}, ...additionalStyles]}
      onPress={onPress}
    >
      <LinearGradient {...gradients.buttonPrimary} style={styles.gradient}>
        <Text style={[styles.title, primary ? styles.primaryTitle : {}]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
})
