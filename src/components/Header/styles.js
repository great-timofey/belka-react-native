import { StyleSheet } from 'react-native'

import { colors, isIOS } from '@global/styles'

export default StyleSheet.create({
  container: {
    height: isIOS ? 80 : 56,
    padding: 10,
    backgroundColor: colors.appBackground,
  },
})
