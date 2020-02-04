import { StyleSheet } from 'react-native'

import { colors, fonts } from '@global/styles'

export default StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 30,
    width: '100%',
  },
  gradient: {
    height: 40,
    borderRadius: 30,
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBackground,
  },
  buttonActive: {
    backgroundColor: 'transparent',
  },
  buttonRight: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonLeft: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.ptsans.bold,
    fontSize: 16,
  },
})
