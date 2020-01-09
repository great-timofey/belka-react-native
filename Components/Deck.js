import React, { memo, useMemo } from 'react'
import { Text } from 'react-native'

export const Deck = memo(function({ objects }) {
  const deck = useMemo(() => {
    return Object.entries(objects).find(([, { type }]) => type === 'BelkaBoard')[1]
  }, [objects])

  return (
    <Text>
      Очки команд (глаза) {deck.team1} / {deck.team2}
    </Text>
  )
})
