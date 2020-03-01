import React, { memo, useCallback, useEffect, useState } from 'react'
import { Image, Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'

import { cards, roundResultsBlack, roundResultsRed } from '@global/images'
import { CARD_HEIGHT, CARD_WIDTH, normalize } from '@global/styles'
import { selectCard } from '@redux/belkaGame/actions'

import styles from './styles'

export const Card = memo(function({
  data,
  onPress,
  my,
  index,
  deck,
  score,
  team,
  additionalStyles = [],
}) {
  const { selectedCardId } = useSelector(state => state.belkaGame)

  const dispatch = useDispatch()
  const [translateY] = useState(new Animated.Value(0))

  const onSelect = useCallback(() => {
    if (!my) return

    if (selectedCardId === data.id) {
      onPress()
      dispatch(selectCard(null))
    } else {
      dispatch(selectCard(data.id))
    }
  }, [dispatch, onPress, selectedCardId, data, my])

  useEffect(() => {
    if (!my) return
    if (selectedCardId === data.id) {
      Animated.timing(translateY, {
        toValue: -CARD_HEIGHT / 5,
        duration: 100,
        easing: Easing.linear,
      }).start()
    } else {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
      }).start()
    }
  }, [selectedCardId, translateY, data, my])

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

  const face = (data && (data.face || data.data)) || { value: '' }

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
    <Animated.View style={[{ transform: [{ translateY }] }]}>
      <TouchableOpacity style={[my && { marginLeft: -normalize(CARD_WIDTH) }]} onPress={onSelect}>
        <ImageBackground
          style={[styles.card, my ? styles.myCard : styles[`card-${index}`], ...additionalStyles]}
          source={cardSuit[cardValue]}
        />
      </TouchableOpacity>
    </Animated.View>
  )
})
