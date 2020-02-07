import { StyleSheet } from 'react-native'

import { deviceWidth } from '@global/styles'

export default StyleSheet.create({
  gameBoardContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  myPlayerContainer: {
    width: deviceWidth,
    height: 100,
    position: 'absolute',
    bottom: 0,
  },
})
