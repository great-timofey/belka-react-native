import { StyleSheet } from 'react-native'

import { colors, deviceWidth } from '@global/styles'
import * as SCENES_NAMES from '@navigation/names'

export default StyleSheet.create({
  wrapper: {
    height: 80,
    backgroundColor: colors.appBackground,
  },
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: '25%',
    alignItems: 'center',
  },
  [SCENES_NAMES.MAIN_STACK]: {
    width: 80,
    position: 'absolute',
    top: -30,
    left: deviceWidth / 2 - 40,
  },
  [SCENES_NAMES.SETTINGS_STACK]: {
    alignItems: 'center',
    marginLeft: -20,
  },
  [SCENES_NAMES.RATINGS_STACK]: {
    alignItems: 'flex-start',
  },
  [SCENES_NAMES.CHAT_STACK]: {
    alignItems: 'flex-end',
  },
  [SCENES_NAMES.SHOP_STACK]: {
    alignItems: 'center',
    marginRight: -20,
  },
})
