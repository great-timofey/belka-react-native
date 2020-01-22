import { StyleSheet } from 'react-native'
import { width } from '@global/styles'

//  TODO: styles normalization

export default StyleSheet.create({
  commonContainer: {
    position: 'absolute'
  },
  first: {
    bottom: 310,
    zIndex: 4,
    left: width / 2 - 50 - 20
  },
  second: {
    bottom: 310,
    zIndex: 2,
    left: width / 2 + 50 - 20
  },
  third: {
    bottom: 330,
    zIndex: 1,
    left: width / 2 - 20
  },
  player: {
    bottom: 270,
    zIndex: 3,
    left: width / 2 - 20
  }
})
