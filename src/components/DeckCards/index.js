import React, { memo, useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { Card } from '../Card'

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
    <View style={styles.deck}>
      {deck.map((card, index) => (
        <Card deck index={index} data={card} key={card.id} />
      ))}
    </View>
  )
})
