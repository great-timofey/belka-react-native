import { StyleSheet } from 'react-native'

import { height, cardWidth, colors, fonts, makeSquare, normalize, width } from '@global/styles'

export default StyleSheet.create({
  playerBoardContainer: {
    width: width / 3
  },
  playerBoardContainerMy: {
    position: 'absolute',
    alignItems: 'center',
    width,
    right: normalize(-cardWidth / 2),
    bottom: normalize(-60)
  },
  playerTimerContainerCommon: {
    position: 'absolute',
    bottom: 120,
    width: 50,
    height: 50,
    top: 0,
    zIndex: 199
  },
  playerTimerContainerMy: {
    top: -height / 6,
    right: width * 0.035
  },
  'playerTimerContainer-0': {
    transform: [{ rotate: '-90deg' }],
    top: -width * 0.16,
    right: -width * 0.16
  },
  'playerTimerContainer-1': {
    top: -width * 0.13,
    left: -width * 0.15
  },
  'playerTimerContainer-2': {
    transform: [{ rotate: '180deg' }],
    top: width * 0.06,
    left: -width * 0.15
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
    width: width / 3,
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
  'playerNameContainer-1': {
    top: height * -0.08
  },
  'playerNameContainer-0': {
    top: height * -0.08
  },
  'playerNameContainer-2': {
    transform: [{ rotate: '180deg' }],
    top: height * 0.05
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
    marginRight: width * 0.1,
    alignItems: 'flex-start'
  },
  'playerCardsContainer-1': {
    transform: [{ rotate: '180deg' }],
    marginRight: width * 0.1,
    alignItems: 'flex-start'
  },
  'playerCardsContainer-2': {
    marginBottom: height * 0.11,
    marginTop: height * 0.02,
    marginLeft: width * 0.08,
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
    bottom: height / 4,
    left: width * 0.01
  },
  'playerTrumpContainer-0': {
    bottom: -width / 20,
    alignSelf: 'center',
    transform: [{ rotate: '270deg' }],
    ...makeSquare(normalize(90))
  },
  'playerTrumpContainer-1': {
    bottom: -width / 20,
    alignSelf: 'center',
    transform: [{ rotate: '90deg' }],
    ...makeSquare(normalize(90))
  },
  'playerTrumpContainer-2': {
    bottom: height / 12,
    alignSelf: 'center',
    transform: [{ rotate: '180deg' }],
    ...makeSquare(normalize(90))
  }
})
