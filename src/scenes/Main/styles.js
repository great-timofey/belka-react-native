import { StyleSheet } from 'react-native'

import { colors, squareSize, width } from '@global/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    ...squareSize('100%')
  },
  cardsBackground: {
    position: 'absolute',
    alignSelf: 'center',
    top: '20%',
    width,
    height: '50%'
  },
  pressable: {
    position: 'absolute',
    width: '25%',
    height: '50%',
    top: '25%'
  },
  pressableLeft: {
    left: 20
  },
  pressableRight: {
    right: 20
  },
  startGameButton: {
    position: 'absolute',
    bottom: '15%',
    width: '30%',
    left: width / 2 - width * 0.15
  }
})
