import { StyleSheet } from 'react-native'
import { normalize } from '@global/styles'

export default StyleSheet.create({
  common: {
    position: 'absolute'
  },
  first: {
    top: normalize(600),
    left: normalize(20),
    transform: [{ rotate: '270deg' }]
  },
  second: {
    top: normalize(-40),
    alignSelf: 'center',
    transform: [{ rotate: '180deg' }]
  },
  third: {
    top: normalize(600),
    right: normalize(20),
    transform: [{ rotate: '90deg' }]
  }
})
