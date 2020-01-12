import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import { useSelector } from 'react-redux'

import { Card } from 'components/Card'
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
        <Card data={card} key={`${player.id}-${player.name}`} />
      ))}
    </View>
  )
})
