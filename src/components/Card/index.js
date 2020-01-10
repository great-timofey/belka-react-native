import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { getSuitCode } from 'utils/suit'
import styles from './styles'

export const Card = memo(function({ data, onPress, deck }) {
  const face = (data && (data.face || data.data)) || { value: '' }

  return deck || !(face.value || data.side === 'face') ? (
    <View style={styles.card}>
      <Text>*</Text>
    </View>
  ) : (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text class="rank">{face.value}</Text>
      <Text class="suit">{getSuitCode(face.suit)}</Text>
    </TouchableOpacity>
  )
})
