import React, { memo, useCallback } from 'react'
import { getSuit, getSuitCode } from '../utils/suit'
import { Text, TouchableOpacity, View } from 'react-native'

export const Card = memo(function({ data, onPress, deck }) {
  const face = (data && (data.face || data.data)) || { value: '' }

  const deckCards = useCallback(() => {
    return (
      <View
        style={{
          padding: 5,
          borderRadius: 3,
          elevation: 3,
          borderColor: 'black',
          width: 40,
          height: 60,
          marginLeft: 5,
          backgroundColor: 'white'
        }}
      >
        <Text>*</Text>
      </View>
    )
  }, [])

  if (deck) {
    return deckCards()
  }

  return face.value || data.side === 'face' ? (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'black',
        padding: 5,
        elevation: 3,
        width: 40,
        height: 60,
        backgroundColor: 'white'
      }}
      onPress={onPress}
    >
      <Text class="rank">{face.value}</Text>
      <Text class="suit">{getSuitCode(face.suit)}</Text>
    </TouchableOpacity>
  ) : (
    deckCards()
  )
})
