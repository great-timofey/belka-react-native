import { StyleSheet } from 'react-native'

import { colors, squareSize } from '@global/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    ...squareSize('100%'),
  },
})
