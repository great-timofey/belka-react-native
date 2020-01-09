import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import { useSelector } from 'react-redux'

import { Card } from './Card'

export const PlayerCard = memo(function({ player }) {
  const { objects } = useSelector(state => state.belkaGame)

  const cardSlot = useMemo(() => player && player.cardSlotId && objects[player.cardSlotId], [
    objects,
    player
  ])

  const playerCard = useMemo(
    () => (cardSlot && cardSlot.items && cardSlot.items.map(id => objects[id])) || [],
    [cardSlot, objects]
  )

  return (
    <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
      {playerCard.map(card => (
        <Card data={card} key={card.id} />
      ))}
    </View>
  )
})
