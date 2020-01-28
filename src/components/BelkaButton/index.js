import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

export const BelkaButton = memo(function({ primary, title, onPress, additionalStyles = [] }) {
  return (
    <TouchableOpacity
      style={[primary ? styles.primaryButton : {}, ...additionalStyles]}
      onPress={onPress}
    >
      <Text style={[primary ? styles.primaryTitle : {}]}>{title}</Text>
    </TouchableOpacity>
  )
})
