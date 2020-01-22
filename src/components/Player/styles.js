import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
  common: {
    position: 'absolute'
  },
  first: {
    top: '40%',
    left: 0 - StatusBar.currentHeight,
    transform: [{ rotate: '270deg' }]
  },
  second: {
    top: '40%',
    right: 0 - StatusBar.currentHeight,
    transform: [{ rotate: '90deg' }]
  },
  third: {
    top: 0,
    alignSelf: 'center',
    transform: [{ rotate: '180deg' }]
  }
})
