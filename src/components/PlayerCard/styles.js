import { StatusBar, StyleSheet } from 'react-native'
import { width } from '@global/styles'

const deviceWidth = width - StatusBar.currentHeight

export default StyleSheet.create({
  commonContainer: {
    position: 'absolute'
  },
  first: {
    bottom: 310,
    zIndex: 4,
    left: deviceWidth / 2 - 50 - 20
  },
  second: {
    bottom: 360,
    zIndex: 3,
    left: deviceWidth / 2 - 20
  },
  third: {
    bottom: 310,
    zIndex: 2,
    left: deviceWidth / 2 + 50 - 20
  },
  player: {
    bottom: 270,
    zIndex: 1,
    left: deviceWidth / 2 - 20
  }
})
