import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import { useSelector } from 'react-redux'

import { Card } from './Card'
import uid from 'lodash/uniqueId'

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
    <View style={{ flexDirection: 'row', flex: 0.5, paddingTop: 10 }}>
      {playerCard.map(card => (
        <Card
          data={card}
          key={`${player.id}-${player.name}-${player.cardSlotId}-${uid(card.id)}`}
        />
      ))}
    </View>
  )
})
