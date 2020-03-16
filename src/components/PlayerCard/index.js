import React, { memo, useMemo, useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import Animated, { Easing, interpolate, concat } from 'react-native-reanimated'

import { CARD_WIDTH, deviceWidth } from '@global/styles'

import { Card } from '../Card'

import styles, { rotations } from './styles'

const DURATION = 500

export const PlayerCard = memo(function({ player, index }) {
  const { objects } = useSelector(state => state.belkaGame)
  const [mounted, setMounted] = useState(false)

  const [left] = useState(new Animated.Value(deviceWidth / 6 - CARD_WIDTH / 2))
  const [top] = useState(new Animated.Value(deviceWidth / 6))
  const [rotate] = useState(new Animated.Value(0))
  const rotation = interpolate(rotate, { inputRange: [0, 360], outputRange: [0, 360] })

  const animate = useCallback(() => {
    Animated.timing(left, {
      toValue: index ? styles[index].left : styles.player.left,
      duration: DURATION,
      easing: Easing.ease,
    }).start()
    Animated.timing(top, {
      toValue: index ? styles[index].top : styles.player.top,
      duration: DURATION,
      easing: Easing.ease,
    }).start()
    Animated.timing(rotate, {
      toValue: index ? rotations[index] : rotations.player,
      duration: DURATION,
      easing: Easing.ease,
    }).start()
  }, [index, left, top, rotate])

  const cardSlot = useMemo(() => player && player.cardSlotId && objects[player.cardSlotId], [
    objects,
    player,
  ])

  const playerCard = useMemo(
    () => (cardSlot && cardSlot.items && cardSlot.items.map(id => objects[id])) || [],
    [cardSlot, objects],
  )

  useEffect(() => {
    if (!mounted && playerCard.length) {
      setMounted(true)
    } else if (mounted && !playerCard.length) {
      setMounted(false)
    }
  }, [playerCard, mounted])

  useEffect(() => {
    if (mounted) {
      animate()
    }
  }, [mounted, animate])

  useEffect(() => {
    if (!mounted) {
      left.setValue(0)
      top.setValue(0)
      rotate.setValue(0)
    }
  }, [mounted, left, top, rotate])

  return (
    <Animated.View
      style={[
        styles.commonContainer,
        {
          left,
          top,
          transform: [{ rotate: concat(rotation, 'deg') }],
        },
      ]}
    >
      {playerCard.map(card => (
        <Card playerCard data={card} key={`${player.id}-${index}-card`} additionalStyles={[{}]} />
      ))}
    </Animated.View>
  )
})
