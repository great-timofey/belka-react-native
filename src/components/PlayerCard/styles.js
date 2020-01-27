import { StyleSheet } from 'react-native'
import { cardWidth, cardHeight, width, normalize } from '@global/styles'

const center = width / 2 - cardWidth / 2

export default StyleSheet.create({
  commonContainer: {
    position: 'absolute'
  },
  first: {
    bottom: 310 + cardHeight / 2,
    left: center,
    zIndex: 3
  },
  second: {
    bottom: 310,
    zIndex: 4,
    left: center - normalize(110)
  },
  third: {
    bottom: 310,
    zIndex: 2,
    left: center + normalize(110)
  },
  player: {
    bottom: 270,
    zIndex: 1,
    left: center
  }
})
