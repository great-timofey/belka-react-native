import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'

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
      <Text style={[styles.title, primary ? styles.primaryTitle : {}]}>{title}</Text>
    </TouchableOpacity>
  )
})
