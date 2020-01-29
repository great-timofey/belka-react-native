import { StyleSheet } from 'react-native'

import { colors, fonts, height } from '@global/styles'

export default StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 10,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primaryButton: {
    backgroundColor: colors.semanticPrimary
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.ptsans.bold
  },
  primaryTitle: {
    color: colors.white
  }
})
