import React, { memo } from 'react'
import { getSuit, getSuitCode } from '../utils/suit'
import { Text, View } from 'react-native'

export const Card = memo(function({ data, onPress }) {
  const face = (data && (data.face || data.data)) || { value: '' }
  const cardClass = ['card', 'rank-' + face.value.toLowerCase(), getSuit(face.suit)].join(' ')

  return face.value || data.side === 'face' ? (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'black',
        width: 20,
        height: 40,
        backgroundColor: 'white'
      }}
      onPress={onPress}
    >
      <Text class="rank">{face.value}</Text>
      <Text class="suit">{getSuitCode(face.suit)}</Text>
    </View>
  ) : (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'black',
        width: 20,
        height: 40,
        backgroundColor: 'white'
      }}
    >
      <Text>*</Text>
    </View>
  )
})
