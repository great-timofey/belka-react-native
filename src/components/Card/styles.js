import { StyleSheet } from 'react-native'

import {
  cardHeight,
  cardWidth,
  deviceWidth,
  deviceHeight,
  colors,
  normalize,
  fonts,
} from '@global/styles'

export default StyleSheet.create({
  card: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'black',
    padding: normalize(5),
    borderRadius: 3,
    width: cardWidth,
    height: cardHeight,
    marginLeft: normalize(5),
    backgroundColor: colors.trumpContainer,
  },
  cover: {
    width: deviceWidth * 0.09,
    height: deviceHeight * 0.08,
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
    width: cardWidth * 0.6,
    height: cardHeight * 0.6,
  },
  cardDeckOffseted: {
    transform: [{ translateX: cardWidth * 0.6 + 5 }],
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
