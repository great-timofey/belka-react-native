import { StyleSheet } from 'react-native'

import { colors, fonts, selectStyles } from '@global/styles'

export default StyleSheet.create({
  button: {
    borderRadius: 25
  },
  gradient: {
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    ...selectStyles(
      {
        shadowRadius: 20,
        shadowColor: 'rgba(26, 26, 26, 0.36)',
        shadowOffset: { width: -1, height: 5 }
      },
      {
        elevation: 5
      }
    )
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
