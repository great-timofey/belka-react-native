import { StyleSheet, StatusBar } from 'react-native'
import { fonts, width } from '@global/styles'

export default StyleSheet.create({
  playerBoardContainer: {
    width: 150
  },
  playerBoardContainerMy: {
    position: 'absolute',
    width,
    bottom: 0 - StatusBar.currentHeight
  },
  nameContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    backgroundColor: 'black',
    left: '50%'
  },
  commonTextStyles: {
    fontFamily: fonts.ptsans.regular,
    fontSize: 20,
    zIndex: 20,
    color: 'red'
  },
  playerCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerNameContainerCommon: {
    backgroundColor: 'black',
    width: 200,
    height: 40,
    zIndex: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    top: -10
  },
  'playerNameContainer-2': {
    transform: [{ rotate: '180deg', translateY: 50 }],
    top: 50
  },
  'playerCardsContainer-0': {
    transform: [{ rotate: '180deg' }],
    marginTop: 30,
    marginLeft: 30,
    alignItems: 'flex-end'
  },
  'playerCardsContainer-1': {
    transform: [{ rotate: '180deg' }],
    marginTop: 30,
    alignItems: 'flex-end'
  },
  'playerCardsContainer-2': {
    marginBottom: 110,
    marginRight: 30
  }
})
