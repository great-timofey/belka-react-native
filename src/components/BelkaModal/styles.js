import { StyleSheet } from 'react-native'

import { colors, deviceHeight, fonts } from '@global/styles'

export default StyleSheet.create({
  modal: {
    padding: 20,
    position: 'absolute',
    top: '50%',
    marginTop: '-50%',
    borderRadius: 20,
    left: 0,
    right: 0,
    height: deviceHeight * 0.45,
    backgroundColor: colors.appBackground,
  },
  modalHeader: {
    textAlign: 'center',
    fontFamily: fonts.ptsans.bold,
    color: colors.semanticPositive,
    fontSize: 30,
  },
})
