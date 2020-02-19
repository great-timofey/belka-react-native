import { StyleSheet } from 'react-native'

import { deviceWidth } from '@global/styles'

export default StyleSheet.create({
  deck: {
    position: 'absolute',
    top: 10,
    right: deviceWidth * 0.08 * 2 + deviceWidth * 0.04,
  },
})
