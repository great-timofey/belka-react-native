import { StyleSheet } from 'react-native'
import { cardHeight, cardWidth, normalize } from '@global/styles'

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
    backgroundColor: 'white'
  },
  cover: {
    width: normalize(133),
    height: normalize(191)
  },
  deck: {
    left: 0
  },
  myCard: {
    position: 'relative',
    marginLeft: normalize(-cardWidth)
  },
  'card-0': {
    transform: [{ rotate: '-50deg' }, { translateY: -8 }, { translateX: -24 }],
    zIndex: 10
  },
  'card-1': {
    transform: [{ rotate: '-30deg' }, { translateY: -5 }, { translateX: -9 }],
    zIndex: 9
  },
  'card-2': {
    transform: [{ rotate: '-11deg' }, { translateY: -8 }, { translateX: 5 }],
    zIndex: 8
  },
  'card-3': {
    transform: [{ rotate: '18deg' }, { translateY: -15 }, { translateX: 27 }],
    zIndex: 7
  },
  'card-4': {
    transform: [{ rotate: '30deg' }, { translateY: -19 }, { translateX: 38 }],
    zIndex: 6
  },
  'card-5': {
    transform: [{ rotate: '40deg' }, { translateY: -21 }, { translateX: 45 }],
    zIndex: 5
  },
  'card-6': {
    transform: [{ rotate: '-70deg' }, { translateY: -20 }, { translateX: -37 }],
    zIndex: 11
  }
})
