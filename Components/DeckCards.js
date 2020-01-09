import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import { Card } from './Card'
import { useSelector } from 'react-redux'

export const DeckCards = memo(function() {
  const { objects } = useSelector(state => state.belkaGame)
  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects]
  )
  const board = useMemo(() => boardId && objects[boardId], [boardId, objects])
  const deckItems = useMemo(() => board && objects[board.deckId] && objects[board.deckId].items, [
    board,
    objects
  ])
  const deck = useMemo(() => (deckItems && deckItems.map(id => objects[id])) || [], [
    deckItems,
    objects
  ])

  return (
    <View style={{ flexDirection: 'row' }}>
      {deck.map(card => (
        <Card data={card} key={card.id} />
      ))}
    </View>
  )
})
