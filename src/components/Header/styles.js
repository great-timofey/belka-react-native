import { StyleSheet } from 'react-native'

import { colors, fonts, squareSize, width } from '@global/styles'

export default StyleSheet.create({
  container: {
    height: 56,
    marginHorizontal: -16,
    padding: 10,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.appBackground
  },
  button: {
    height: '100%',
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRight: {
    justifyContent: 'flex-end',
    paddingHorizontal: 5
  },
  avatar: {
    ...squareSize(40),
    borderRadius: 20,
    marginRight: 10
  },
  money: {
    color: colors.white,
    fontFamily: fonts.ptsans.bold,
    fontSize: 15,
    marginRight: 5
  },
  levelIcon: {
    ...squareSize(25),
    position: 'absolute',
    bottom: -8,
    right: -6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  levelText: {
    color: colors.white,
    fontFamily: fonts.ptsans.bold,
    fontSize: 12,
    transform: [{ translateY: -3 }]
  },
  nickname: {
    fontSize: 15,
    marginBottom: 3,
    transform: []
  },
  purchaseButton: {
    ...squareSize(35),
    borderRadius: 17
  }
})
