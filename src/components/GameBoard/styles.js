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
  roundResultsContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  resultsBlack: {
    transform: [{ translateX: -40 }],
  },
  resultsRed: {
    transform: [{ translateX: 40 }],
  },
})
