import { StyleSheet } from 'react-native'

import { colors } from '@global/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    width: '100%'
  },
  containerPadded: {
    paddingBottom: 30
  }
})
