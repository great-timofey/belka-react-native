import React, { memo } from 'react'
import { Image, Text, ImageBackground, View, TouchableOpacity } from 'react-native'

import { cards, roundResultsBlack, roundResultsRed } from '@global/images'
import { CARD_WIDTH, normalize } from '@global/styles'

import styles from './styles'

export const Card = memo(function({
  data,
  onPress,
  my,
  index,
  deck,
  score,
  team,
  playerCard,
  additionalStyles = [],
}) {
  if (team) {
    return (
      <ImageBackground
        style={[styles.card, styles.gameRoundCard, ...additionalStyles]}
        source={team === 'red' ? roundResultsRed : roundResultsBlack}
      >
        <View style={styles.gameRoundTextContainer}>
          <Text style={styles.gameRoundText}>{score}</Text>
        </View>
      </ImageBackground>
    )
  }

  const face = (data && (data.face || data.data)) || { value: '' }

  if (deck) {
    return (
      <Image
        style={[
          styles.card,
          styles.cover,
          styles.cardDeck,
          index % 2 === 0 && styles.cardDeckOffseted,
          ...additionalStyles,
        ]}
        source={cards.cover}
      />
    )
  }

  if (!(face.value || data.side === 'face')) {
    return (
      <Image
        style={[styles.card, styles[`card-${index}`], styles.cover, ...additionalStyles]}
        source={cards.cover}
      />
    )
  }

  const cardImageIndex = face.suit.toString()
  const cardSuit = cards[cardImageIndex]
  const cardValue = face.value.toString()

  return (
    <TouchableOpacity
      activeOpacity={playerCard ? 1 : 0}
      style={[my && { marginLeft: -normalize(CARD_WIDTH) }]}
      onPress={onPress}
    >
      <ImageBackground
        style={[styles.card, my ? styles.myCard : styles[`card-${index}`], ...additionalStyles]}
        source={cardSuit[cardValue]}
      />
    </TouchableOpacity>
  )
})
