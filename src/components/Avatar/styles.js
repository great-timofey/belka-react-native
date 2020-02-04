import { StyleSheet } from 'react-native'

import { colors, fonts, squareSize } from '@global/styles'

export default StyleSheet.create({
  avatar: {
    ...squareSize(50),
    borderRadius: 25,
    marginRight: 10,
  },
  avatarSmall: {
    ...squareSize(35),
    borderRadius: 17,
  },
  iconLevel: {
    ...squareSize(35),
    position: 'absolute',
    bottom: -16,
    right: -12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLevelSmall: {
    ...squareSize(16),
    bottom: -5,
    right: -3,
  },
  levelText: {
    color: colors.white,
    fontFamily: fonts.ptsans.bold,
    fontSize: 18,
    transform: [{ translateY: -5 }],
  },
})
