import { StyleSheet } from 'react-native'

import { colors, fonts } from '@global/styles'

const INPUT_HEIGHT = 40

export default StyleSheet.create({
  container: {
    width: '100%',
    height: INPUT_HEIGHT,
  },
  gradient: {
    width: '100%',
    height: INPUT_HEIGHT,
    borderRadius: 15,
  },
  input: {
    height: INPUT_HEIGHT,
    color: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 14,
    borderRadius: 15,
    fontFamily: fonts.ptsans.regular,
    fontWeight: '400',
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
})
