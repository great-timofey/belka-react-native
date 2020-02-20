import { StyleSheet } from 'react-native'

import { colors, fonts } from '@global/styles'

export default StyleSheet.create({
  deck: {
    position: 'absolute',
    top: 30,
    left: 10,
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
