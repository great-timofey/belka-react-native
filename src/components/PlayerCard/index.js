import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import { useSelector } from 'react-redux'

import { Card } from '@components/Card'

import styles from './styles'
// import { mockState } from '@redux/belkaGame/mockState'

export const PlayerCard = memo(function({ player, index }) {
  const { objects } = useSelector(state => state.belkaGame)
  // const { objects } = mockState

  const cardSlot = useMemo(() => player && player.cardSlotId && objects[player.cardSlotId], [
    objects,
    player
  ])

  const playerCard = useMemo(
    () => (cardSlot && cardSlot.items && cardSlot.items.map(id => objects[id])) || [],
    [cardSlot, objects]
  )

  return (
    <View style={[styles.commonContainer, index ? styles[index] : styles.player]}>
      {playerCard.map(card => (
        <Card data={card} key={`${player.id}-${index}-card`} />
      ))}
    </View>
  )
})
