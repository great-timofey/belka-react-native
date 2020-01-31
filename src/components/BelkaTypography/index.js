import React, { memo } from 'react'
import { Text } from 'react-native'

import styles from './styles'

export const BelkaTypography = memo(function({ bold, children, style = [] }) {
  return <Text style={[styles.text, bold && styles.textBold, ...style]}>{children}</Text>
})
