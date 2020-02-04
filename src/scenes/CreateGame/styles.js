import { StyleSheet } from 'react-native'

import { colors, deviceWidth, fonts } from '@global/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  wrapper: {
    paddingBottom: 0,
  },
  input: {
    marginBottom: 10,
  },
  playersLevel: {
    fontFamily: fonts.ptsans.bold,
    color: colors.white,
    fontSize: 14,
    marginBottom: 3,
  },
  slider: {
    width: (deviceWidth - 20) / 1.5,
    height: 30,
    marginBottom: 30,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }, { translateX: 40 }],
  },
  createGame: {
    height: 50,
    marginTop: -10,
  },
})
