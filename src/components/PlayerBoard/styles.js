import { StyleSheet } from 'react-native'
import { colors, fonts, makeSquare, normalize, width } from '@global/styles'

export default StyleSheet.create({
  playerBoardContainer: {
    width: normalize(206)
  },
  playerBoardContainerMy: {
    position: 'absolute',
    alignItems: 'center',
    width,
    bottom: normalize(-60)
  },
  nameContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    backgroundColor: 'black',
    left: '50%'
  },
  playerNameContainerCommon: {
    backgroundColor: 'black',
    width: 200,
    height: 40,
    zIndex: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.semanticHighlight,
    borderRadius: 40,
    position: 'absolute',
    alignSelf: 'center',
    top: -10
  },
  'playerNameContainer-2': {
    transform: [{ rotate: '180deg' }],
    top: 50
  },
  commonTextStyles: {
    fontFamily: fonts.ptsans.regular,
    fontSize: 20,
    zIndex: 20,
    color: 'white'
  },
  playerCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  'playerCardsContainer-0': {
    transform: [{ rotate: '180deg' }],
    marginTop: 30,
    marginLeft: 30
    // alignItems: 'flex-end'
  },
  'playerCardsContainer-1': {
    transform: [{ rotate: '180deg' }],
    marginTop: 30
    // alignItems: 'flex-end'
  },
  'playerCardsContainer-2': {
    marginBottom: 110,
    marginRight: 30,
    alignItems: 'flex-start'
  },
  trumpContainer: {
    position: 'absolute',
    bottom: 20,
    zIndex: 49,
    backgroundColor: colors.trumpContainer,
    borderRadius: 100,
    ...makeSquare(normalize(131)),
    alignItems: 'center',
    justifyContent: 'center'
  },
  trumpContainerMy: {
    bottom: normalize(580),
    left: normalize(40)
  },
  'playerTrumpContainer-0': {
    bottom: '-100%',
    alignSelf: 'center',
    transform: [{ rotate: '270deg' }],
    ...makeSquare(normalize(90))
  },
  'playerTrumpContainer-1': {
    bottom: '-100%',
    alignSelf: 'center',
    transform: [{ rotate: '90deg' }],
    ...makeSquare(normalize(90))
  },
  'playerTrumpContainer-2': {
    bottom: 80,
    alignSelf: 'center',
    transform: [{ rotate: '180deg' }],
    ...makeSquare(normalize(90))
  }
})
