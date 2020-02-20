import { StyleSheet } from 'react-native'

import { colors, fonts, normalize, deviceWidth, squareSize } from '@global/styles'

export default StyleSheet.create({
  infoBoard: {
    position: 'absolute',
    top: 40,
    right: 10,
    flex: 1,
    flexDirection: 'row',
    height: normalize(104),
  },
  scoreContainer: {
    height: normalize(104),
    width: deviceWidth * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButton: {
    ...squareSize(normalize(52)),
    position: 'absolute',
    right: 10,
    top: 10,
  },
  scoreContainerImage: {
    top: 0,
    position: 'absolute',
    width: normalize(84),
    height: normalize(104),
  },
  scoreText: {
    fontFamily: fonts.ptsans.regular,
    fontSize: normalize(40),
    color: colors.black,
  },
})
