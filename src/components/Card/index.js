import React, { memo } from 'react'
import { Image, ImageBackground, TouchableOpacity } from 'react-native'
import { cards } from '@global/images'

import styles from './styles'

export const Card = memo(function({ data, onPress, my, index, deck }) {
  const face = (data && (data.face || data.data)) || { value: '' }

  if (deck) {
    return (
      <Image
        style={[
          styles.card,
          styles.cover,
          styles.cardDeck,
          index % 2 === 0 && styles.cardDeckOffseted
        ]}
        source={cards.cover}
      />
    )
  }

  if (!(face.value || data.side === 'face')) {
    return (
      <Image style={[styles.card, styles[`card-${index}`], styles.cover]} source={cards.cover} />
    )
  }

  const cardImageIndex = face.suit.toString()
  const cardSuit = cards[cardImageIndex]
  const cardValue = face.value.toString()

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        style={[styles.card, my ? styles.myCard : styles[`card-${index}`]]}
        source={cardSuit[cardValue]}
      />
    </TouchableOpacity>
  )
})
