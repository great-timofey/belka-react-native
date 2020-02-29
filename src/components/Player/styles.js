import { StatusBar, StyleSheet } from 'react-native'

import { deviceHeight, isIOS, squareSize } from '@global/styles'

const topPlayerOffset = 0.25

export default StyleSheet.create({
  common: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    ...squareSize(100),
  },
  First: {
    top: deviceHeight * topPlayerOffset + (isIOS ? 0 : StatusBar.currentHeight),
    left: 10,
    transform: [{ rotate: '-90deg' }],
  },
  Second: {
    top: 10,
  },
  Third: {
    top: deviceHeight * topPlayerOffset + (isIOS ? 0 : StatusBar.currentHeight),
    right: 10,
    transform: [{ rotate: '90deg' }],
  },
})
