import { StyleSheet } from 'react-native'

import { CARD_WIDTH } from '@global/styles'

export default StyleSheet.create({
  leftSideCard: {
    left: 12,
  },
  leftSideRotatedCard: {
    transform: [{ rotate: '35deg' }, { translateX: 10 }],
  },
  rightSideCard: {
    left: 12 + 15 + CARD_WIDTH * 0.63,
  },
  rightSideRotatedCard: {
    transform: [{ rotate: '35deg' }, { translateX: 10 }],
  },
})
