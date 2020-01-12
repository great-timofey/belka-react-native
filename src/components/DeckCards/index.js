import React, { memo, useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { Card } from 'components/Card'
import styles from './styles'

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
    <View style={styles.container}>
      {deck.map(card => (
        <Card deck data={card} key={card.id} />
      ))}
    </View>
  )
})