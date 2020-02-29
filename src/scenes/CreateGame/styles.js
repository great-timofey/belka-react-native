import { StyleSheet } from 'react-native'

import { colors, deviceWidth, fonts, isAndroid, selectStyles } from '@global/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: isAndroid ? 10 : 20,
  },
  contentContainer: {
    paddingBottom: isAndroid ? 20 : 30,
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
    height: 30,
    marginBottom: 30,
    ...selectStyles(
      {
        width: deviceWidth - 40,
      },
      {
        width: deviceWidth / 1.5 - 40,
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }, { translateX: 40 }],
      },
    ),
  },
  createGame: {
    height: 50,
    marginTop: -10,
  },
})
