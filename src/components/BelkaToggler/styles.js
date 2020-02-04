import { StyleSheet } from 'react-native'

import { colors, fonts } from '@global/styles'

export default StyleSheet.create({
  item: {
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    height: 90,
    alignItems: 'flex-start',
  },
  buttons: {
    height: 80,
    width: 120,
    marginTop: -10,
    marginLeft: 'auto',
  },
  gradient: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  iconForeground: {
    right: -5,
  },
  iconBackground: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    position: 'absolute',
  },
  description: {
    fontFamily: fonts.ptsans.regular,
    color: colors.white,
    fontSize: 15,
    marginBottom: 3,
    width: '60%',
  },
})
