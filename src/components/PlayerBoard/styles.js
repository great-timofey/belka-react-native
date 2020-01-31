import { StyleSheet } from 'react-native'

import {
  deviceHeight,
  cardWidth,
  colors,
  fonts,
  squareSize,
  normalize,
  deviceWidth
} from '@global/styles'

export default StyleSheet.create({
  playerBoardContainer: {
    width: deviceWidth / 3
  },
  playerBoardContainerMy: {
    position: 'absolute',
    alignItems: 'center',
    width: deviceWidth,
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
    top: -deviceHeight / 6,
    right: deviceWidth * 0.035
  },
  'playerTimerContainer-0': {
    transform: [{ rotate: '-90deg' }],
    top: -deviceWidth * 0.16,
    right: -deviceWidth * 0.16
  },
  'playerTimerContainer-1': {
    top: -deviceWidth * 0.13,
    left: -deviceWidth * 0.15
  },
  'playerTimerContainer-2': {
    transform: [{ rotate: '180deg' }],
    top: deviceWidth * 0.06,
    left: -deviceWidth * 0.15
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
    width: deviceWidth / 3,
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
    top: deviceHeight * -0.08
  },
  'playerNameContainer-0': {
    top: deviceHeight * -0.08
  },
  'playerNameContainer-2': {
    transform: [{ rotate: '180deg' }],
    top: deviceHeight * 0.05
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
    marginRight: deviceWidth * 0.1,
    alignItems: 'flex-start'
  },
  'playerCardsContainer-1': {
    transform: [{ rotate: '180deg' }],
    marginRight: deviceWidth * 0.1,
    alignItems: 'flex-start'
  },
  'playerCardsContainer-2': {
    marginBottom: deviceHeight * 0.11,
    marginTop: deviceHeight * 0.02,
    marginLeft: deviceWidth * 0.08,
    alignItems: 'flex-start'
  },
  trumpContainer: {
    position: 'absolute',
    bottom: 20,
    zIndex: 49,
    backgroundColor: colors.trumpContainer,
    borderRadius: 100,
    ...squareSize(normalize(131)),
    alignItems: 'center',
    justifyContent: 'center'
  },
  trumpContainerMy: {
    bottom: deviceHeight / 4,
    left: deviceWidth * 0.01
  },
  'playerTrumpContainer-0': {
    bottom: -deviceWidth / 20,
    alignSelf: 'center',
    transform: [{ rotate: '270deg' }],
    ...squareSize(normalize(90))
  },
  'playerTrumpContainer-1': {
    bottom: -deviceWidth / 20,
    alignSelf: 'center',
    transform: [{ rotate: '90deg' }],
    ...squareSize(normalize(90))
  },
  'playerTrumpContainer-2': {
    bottom: deviceHeight / 12,
    alignSelf: 'center',
    transform: [{ rotate: '180deg' }],
    ...squareSize(normalize(90))
  }
})
