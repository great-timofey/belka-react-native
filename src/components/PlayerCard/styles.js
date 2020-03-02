import { StyleSheet } from 'react-native'

import {
  CARD_WIDTH,
  CARD_HEIGHT,
  deviceWidth,
  deviceHeight,
  isIphoneXOrBigger,
} from '@global/styles'

const CENTER = deviceWidth / 2 - CARD_WIDTH / 2

export const rotations = {
  First: 90,
  Second: 0,
  Third: -90,
  player: 0,
}

export default StyleSheet.create({
  commonContainer: {
    position: 'absolute',
  },
  First: {
    top: CENTER - CARD_WIDTH / 1.5,
    left: -CARD_HEIGHT / 2,
  },
  Second: {
    top: deviceHeight / 2 - (isIphoneXOrBigger ? CARD_HEIGHT : CARD_HEIGHT / 2),
    left: deviceWidth / 6 - CARD_WIDTH / 2,
  },
  Third: {
    top: deviceWidth / 2 - CARD_WIDTH / 4 + 5,
    left: CARD_HEIGHT * 1.8 + 3,
  },
  player: {
    top: -CARD_HEIGHT * (isIphoneXOrBigger ? 2 : 1.5),
    left: deviceWidth / 6 - CARD_WIDTH / 2,
  },
})
