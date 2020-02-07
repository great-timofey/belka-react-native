import { StyleSheet } from 'react-native'

import { colors, fonts, selectStyles } from '@global/styles'

export default StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 40,
  },
  gradient: {
    height: '100%',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    ...selectStyles(
      {
        shadowColor: 'rgba(26, 26, 26, 0.36)',
        shadowOffset: { width: 8, height: -1 },
        shadowRadius: 40,
      },
      {
        elevation: 5,
      },
    ),
  },
  buttonPrimary: {
    backgroundColor: colors.semanticPrimary,
  },
  buttonNegative: {
    backgroundColor: colors.semanticNegative,
  },
  titlePrimary: {
    color: colors.white,
  },
  titleNegative: {
    color: colors.white,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.ptsans.bold,
  },
})
