import { StyleSheet } from 'react-native'

import { colors, fonts, normalize } from '@global/styles'

export default StyleSheet.create({
  infoBoard: {
    position: 'absolute',
    top: 10,
    left: 10,
    flex: 1,
    width: normalize(230),
    height: normalize(145),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreContainerImage: {
    width: normalize(105),
    height: normalize(145),
    justifyContent: 'center',
  },
  scoreText: {
    alignSelf: 'center',
    fontFamily: fonts.ptsans.regular,
    fontSize: normalize(48),
    color: colors.black,
  },
})
