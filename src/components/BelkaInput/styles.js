import { StyleSheet } from 'react-native'

import { colors } from '@global/styles'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 30
  },
  gradient: {
    width: '100%',
    height: 30,
    borderRadius: 10
  },
  input: {
    color: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 14,
    borderRadius: 10
  },
  inputWithStartIcon: {
    paddingLeft: 45
  },
  inputWithEndIcon: {
    paddingRight: 45
  },
  icon: {
    width: 20,
    top: 5,
    zIndex: 2,
    height: 20,
    position: 'absolute'
  },
  startIcon: {
    left: 20
  },
  endIcon: {
    right: 20
  }
})
