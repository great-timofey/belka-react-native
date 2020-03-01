import { StyleSheet } from 'react-native'

import { CARD_WIDTH, CARD_HEIGHT, deviceWidth, deviceHeight } from '@global/styles'

const CENTER = deviceWidth / 2 - CARD_WIDTH / 2
const CARDS_BOTTOM_OFFSET = deviceHeight * 0.5

export default StyleSheet.create({
  commonContainer: {
    position: 'absolute',
  },
  First: {
    top: deviceHeight - CARDS_BOTTOM_OFFSET,
    left: CENTER - CARD_WIDTH / 1.8,
  },
  Second: {
    top: deviceHeight - CARDS_BOTTOM_OFFSET - CARD_HEIGHT / 2,
    left: CENTER,
  },
  Third: {
    top: deviceHeight - CARDS_BOTTOM_OFFSET,
    left: CENTER + CARD_WIDTH / 1.8,
  },
  player: {
    top: deviceHeight - CARDS_BOTTOM_OFFSET + CARD_HEIGHT / 2,
    left: CENTER,
  },
})
