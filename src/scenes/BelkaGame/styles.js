import { StyleSheet } from 'react-native'

import { colors, makeSquare } from '@global/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.gameBackground,
    flex: 1
  },
  backgroundImage: {
    ...makeSquare('100%')
  }
})
