import { StyleSheet } from 'react-native'

import { fonts, deviceWidth, colors } from '@global/styles'

export default StyleSheet.create({
  container: {
    width: deviceWidth,
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    height: '100%',
    width: '25%',
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backImage: {
    width: 25,
    height: 20,
  },
  title: {
    fontFamily: fonts.ptsans.bold,
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    color: colors.white,
  },
})
