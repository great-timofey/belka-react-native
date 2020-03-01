import React, { memo, useMemo, useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import Animated, { Easing } from 'react-native-reanimated'

import { Card } from '../Card'
import playerStyles from '../Player/styles'

import styles from './styles'

const DURATION = 500

export const PlayerCard = memo(function({ player, index }) {
  const { objects, currentPlayerOrder } = useSelector(state => state.belkaGame)
  const [mounted, setMounted] = useState(false)

  // const cards = useMemo(
  //   () =>
  //     Object.values(objects).filter(
  //       object => object.type === 'Cards' && object.cardsSide === 'face',
  //     ),
  //   [objects],
  // )
  // const cardsCount = useMemo(
  //   () => cards && cards.reduce((acc, cardItems) => acc + cardItems.items.length, 0),
  //   [cards],
  // )

  const leftInitial = useMemo(() => {
    return index ? playerStyles[index].left : playerStyles.player.left
  }, [index])

  const topInitial = useMemo(() => {
    return index ? playerStyles[index].top : playerStyles.player.top
  }, [index])

  const [left] = useState(new Animated.Value(leftInitial))
  const [top] = useState(new Animated.Value(topInitial))

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
  }, [index, left, top])

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
      left.setValue(leftInitial)
      top.setValue(topInitial)
    }
  }, [mounted, left, top, leftInitial, topInitial])

  //  TODO: find out about zindex
  return (
    <Animated.View style={[styles.commonContainer, { zIndex: currentPlayerOrder }, { left, top }]}>
      {playerCard.map(card => (
        <Card playerCard data={card} key={`${player.id}-${index}-card`} />
      ))}
    </Animated.View>
  )
})
