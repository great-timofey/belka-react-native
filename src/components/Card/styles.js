import { StatusBar, StyleSheet } from 'react-native'
import { width } from '@global/styles'

export default StyleSheet.create({
  card: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 3,
    width: (width + StatusBar.currentHeight) / 8,
    height: (((width + StatusBar.currentHeight) / 8) * 3) / 2,
    marginLeft: 5,
    backgroundColor: 'white'
  },
  cover: {
    width: 40,
    height: 60
  },
  deck: {
    left: 0
  },
  myCard: {
    position: 'relative',
    marginLeft: 0
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
