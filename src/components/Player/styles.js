import { StatusBar, StyleSheet } from 'react-native'

import { deviceHeight } from '@global/styles'

export default StyleSheet.create({
  common: {
    position: 'absolute',
  },
  first: {
    top: deviceHeight * 0.4 + StatusBar.currentHeight,
    left: 0,
    transform: [{ rotate: '270deg' }],
  },
  second: {
    alignSelf: 'center',
    transform: [{ rotate: '180deg' }],
  },
  third: {
    top: deviceHeight * 0.4 + StatusBar.currentHeight,
    right: 0,
    transform: [{ rotate: '90deg' }],
  },
})
