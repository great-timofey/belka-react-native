import { StyleSheet } from 'react-native'

import { fonts } from '@global/styles'

export default StyleSheet.create({
  joinRoomButton: {
    flex: 1,
    borderBottomColor: 'black',
    fontFamily: fonts.ptsans.bold,
    borderBottomWidth: 1,
    marginBottom: 5
  },
  updateRoomButton: {
    marginTop: 5
  }
})
