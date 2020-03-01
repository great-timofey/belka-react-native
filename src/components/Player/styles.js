import { StatusBar, StyleSheet } from 'react-native'

import {
  deviceHeight,
  deviceWidth,
  TOP_PLAYER_OFFSET,
  isIOS,
  squareSize,
  CARD_HEIGHT,
} from '@global/styles'

const CONTAINER_SIZE = 100

export default StyleSheet.create({
  common: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    ...squareSize(CONTAINER_SIZE),
  },
  First: {
    top: deviceHeight * TOP_PLAYER_OFFSET + (isIOS ? 0 : StatusBar.currentHeight),
    left: 10,
    transform: [{ rotate: '-90deg' }],
  },
  Second: {
    top: 10,
    left: deviceWidth / 2 - CONTAINER_SIZE / 2,
  },
  Third: {
    top: deviceHeight * TOP_PLAYER_OFFSET + (isIOS ? 0 : StatusBar.currentHeight),
    left: deviceWidth - 10 - CONTAINER_SIZE,
    transform: [{ rotate: '90deg' }],
  },
  player: {
    top: deviceHeight - CARD_HEIGHT,
    left: deviceWidth / 2 - CONTAINER_SIZE / 2,
  },
})
