import { StyleSheet } from 'react-native'

import { colors, fonts, selectStyles } from '@global/styles'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginBottom: 10,
    height: 130,
    ...selectStyles(
      {
        shadowRadius: 20,
        shadowColor: 'rgba(26, 26, 26, 0.36)',
        shadowOffset: { width: -1, height: 5 },
      },
      {
        elevation: 5,
      },
    ),
  },
  gradient: {
    borderRadius: 20,
    padding: 10,
    height: 130,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  name: {
    flexDirection: 'row',
  },
  nameText: {
    color: colors.semanticAttention,
    fontFamily: fonts.ptsans.bold,
    fontSize: 15,
    marginRight: 3,
  },
  metainfo: {
    flexDirection: 'row',
  },
  metainfoText: {
    marginRight: 5,
    fontFamily: fonts.ptsans.regular,
    color: colors.white,
    fontSize: 12,
  },
  lockIcon: {
    width: 23,
    height: 20,
  },
  lockIconOn: {
    width: 18,
    height: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const icons = StyleSheet.create({
  eggsX4: {
    width: 51,
    height: 70,
  },
  dropAce: {
    width: 39,
    height: 70,
  },
  spas30: {
    width: 32,
    height: 71,
  },
  chat: {
    width: 31,
    height: 72,
  },
  fin120: {
    width: 53,
    height: 70,
  },
})
