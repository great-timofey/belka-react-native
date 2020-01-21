import React, { memo, useCallback } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { cards } from '@global/images'

import styles from './styles'

export const Card = memo(function({ data, onPress, deck }) {
  const face = (data && (data.face || data.data)) || { value: '' }

  if (deck || !(face.value || data.side === 'face')) {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={cards.cover} />
      </View>
    )
  }

  const getCard = useCallback(() => {
    try {
      const cardImageIndex = face.suit.toString()
      const card = cards[cardImageIndex]
      return <Image style={styles.image} source={card[face.value.toString()]} />
    } catch (e) {
      console.log('ERROR', e)
      return <Image style={styles.image} source={cards['1']['K']} />
    }
  }, [face])

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {getCard()}
    </TouchableOpacity>
  )
})
