import { StatusBar, StyleSheet } from 'react-native'

import { deviceHeight } from '@global/styles'

export default StyleSheet.create({
  common: {
    position: 'absolute',
    alignSelf: 'center',
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  First: {
    top: deviceHeight * 0.4 + StatusBar.currentHeight,
    left: 10,
    transform: [{ rotate: '-90deg' }],
  },
  Second: {
    top: 10,
  },
  Third: {
    top: deviceHeight * 0.4 + StatusBar.currentHeight,
    right: 10,
    transform: [{ rotate: '90deg' }],
  },
})
