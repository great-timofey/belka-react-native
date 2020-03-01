import { StyleSheet } from 'react-native'

import {
  CARD_HEIGHT,
  CARD_WIDTH,
  deviceHeight,
  colors,
  normalize,
  fonts,
  hex2rgba,
} from '@global/styles'

export default StyleSheet.create({
  card: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: hex2rgba('#FFFFFF', 0.2),
    padding: normalize(5),
    borderRadius: 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginLeft: normalize(5),
    backgroundColor: colors.trumpContainer,
  },
  cover: {
    width: CARD_WIDTH * 0.6,
    height: CARD_HEIGHT * 0.6,
  },
  gameRoundCard: {
    position: 'absolute',
    top: deviceHeight / 3.5,
    alignSelf: 'center',
  },
  gameRoundTextContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#ede7dc',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  gameRoundText: {
    fontSize: 20,
    fontFamily: fonts.ptsans.regular,
  },
  cardDeck: {
    left: 0,
    width: CARD_WIDTH * 0.6,
    height: CARD_HEIGHT * 0.6,
  },
  cardDeckOffseted: {
    transform: [{ translateX: CARD_WIDTH * 0.6 + 5 }],
  },
  myCard: {
    position: 'relative',
  },
  'card-0': {
    transform: [{ rotate: '-45deg' }, { translateY: -35 }, { translateX: -30 }],
    zIndex: 11,
  },
  'card-1': {
    transform: [{ rotate: '-30deg' }, { translateY: -30 }, { translateX: -25 }],
    zIndex: 10,
  },
  'card-2': {
    transform: [{ rotate: '-15deg' }, { translateY: -30 }, { translateX: -20 }],
    zIndex: 9,
  },
  'card-3': {
    transform: [{ rotate: '0deg' }, { translateY: -30 }, { translateX: -15 }],
    zIndex: 8,
  },
  'card-4': {
    transform: [{ rotate: '15deg' }, { translateY: -30 }, { translateX: -10 }],
    zIndex: 7,
  },
  'card-5': {
    transform: [{ rotate: '30deg' }, { translateY: -30 }, { translateX: 0 }],
    zIndex: 6,
  },
  'card-6': {
    transform: [{ rotate: '45deg' }, { translateY: -30 }, { translateX: 10 }],
    zIndex: 5,
  },
  'card-7': {
    transform: [{ rotate: '60deg' }, { translateY: -30 }, { translateX: 20 }],
    zIndex: 4,
  },
})
