import { StyleSheet } from 'react-native'

import { cardWidth, cardHeight, deviceWidth, normalize } from '@global/styles'

const center = deviceWidth / 2 - cardWidth / 2

export default StyleSheet.create({
  commonContainer: {
    position: 'absolute',
  },
  First: {
    bottom: 250,
    zIndex: 4,
    left: center - normalize(110),
  },
  Second: {
    bottom: 250 + cardHeight / 2,
    left: center,
    zIndex: 3,
  },
  Third: {
    bottom: 250,
    zIndex: 2,
    left: center + normalize(110),
  },
  player: {
    bottom: 210,
    zIndex: 1,
    left: center,
  },
})
