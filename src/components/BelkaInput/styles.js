import { StyleSheet } from 'react-native'

import { colors, fonts, hex2rgba } from '@global/styles'

const INPUT_HEIGHT = 40

export default StyleSheet.create({
  container: {
    width: '100%',
    height: INPUT_HEIGHT,
  },
  containerError: {
    marginBottom: 20,
  },
  gradient: {
    width: '100%',
    height: INPUT_HEIGHT,
    borderRadius: 17,
  },
  input: {
    height: INPUT_HEIGHT,
    color: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 14,
    borderRadius: 17,
    fontFamily: fonts.ptsans.regular,
    fontWeight: '400',
  },
  inputError: {
    borderWidth: 1,
    borderColor: hex2rgba(colors.semanticNegative, 0.5),
  },
  inputWithStartIcon: {
    paddingLeft: 65,
  },
  inputWithEndIcon: {
    paddingRight: 65,
  },
  icon: {
    width: 20,
    top: INPUT_HEIGHT / 2 - 10,
    zIndex: 2,
    height: 20,
    position: 'absolute',
  },
  startIcon: {
    left: 20,
  },
  endIcon: {
    right: 20,
  },
  error: {
    position: 'absolute',
    bottom: -15,
    left: 20,
  },
  errorText: {
    fontFamily: fonts.ptsans.regular,
    color: colors.semanticNegative,
    fontSize: 11,
  },
})
