import { StyleSheet } from 'react-native'
import { width } from '@global/styles'

export default StyleSheet.create({
  gameBoardContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  },
  myPlayerContainer: {
    width,
    height: 100,
    position: 'absolute',
    bottom: 0
  }
})
