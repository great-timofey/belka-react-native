import React, { memo, useMemo } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { Card } from '@components/Card'
import styles from './styles'
// import { mockState } from '@redux/belkaGame/mockState'

export const DeckCards = memo(function() {
  const { objects } = useSelector(state => state.belkaGame)

  // const { objects } = mockState

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
      <Text>deck</Text>
      {deck.map((card, index) => (
        <Card deckIndex={index} data={card} key={card.id} />
      ))}
    </View>
  )
})
