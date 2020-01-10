import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import uid from 'lodash/uniqueId'
import { useSelector } from 'react-redux'

import { Card } from '../Card'
import styles from './styles'

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
    <View style={styles.container}>
      {playerCard.map(card => (
        <Card
          data={card}
          key={`${player.id}-${player.name}-${player.cardSlotId}-${uid(card.id)}`}
        />
      ))}
    </View>
  )
})
