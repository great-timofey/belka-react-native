import { StyleSheet } from 'react-native'

import { fonts } from '@global/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  joinRoomButton: {
    flex: 1,
    borderBottomColor: 'black',
    fontFamily: fonts.ptsans.bold,
    borderBottomWidth: 1,
    marginBottom: 5
  },
  updateRoomButton: {
    marginTop: 5
  },
  segmentedControl: {
    marginBottom: 10
  },
  createRoom: {
    height: 50
  }
})
