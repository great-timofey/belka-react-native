import { StyleSheet } from 'react-native'

import { colors, fonts, height } from '@global/styles'

export default StyleSheet.create({
  primaryButton: {
    borderRadius: 25,
    padding: 10,
    height: height * 0.07,
    backgroundColor: colors.semanticPrimary
  },
  primaryTitle: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.ptsans.bold
  }
})
