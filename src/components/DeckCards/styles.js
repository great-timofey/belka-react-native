import { StyleSheet } from 'react-native'

import { colors, fonts } from '@global/styles'

export default StyleSheet.create({
  deck: {
    ...StyleSheet.absoluteFillObject,
  },
  scoreBoard: {
    top: 30,
    left: 0,
    backgroundColor: 'red',
  },
  bank: {
    position: 'absolute',
    top: 10,
    left: 12,
  },
  bankText: {
    fontFamily: fonts.ptsans.bold,
    fontSize: 15,
    color: colors.white,
  },
})
