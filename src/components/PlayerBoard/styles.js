import { StyleSheet } from 'react-native'

import {
  deviceHeight,
  cardWidth,
  colors,
  fonts,
  squareSize,
  normalize,
  deviceWidth,
} from '@global/styles'

export default StyleSheet.create({
  playerBoardContainer: {
    width: deviceWidth / 3,
    height: 50,
  },
  playerBoardContainerMy: {
    position: 'absolute',
    width: deviceWidth,
    height: 60,
    paddingLeft: normalize(cardWidth),
    flex: 1,
    bottom: 0,
  },
  playerTimerContainerCommon: {
    position: 'absolute',
    ...squareSize(40),
    top: 0,
  },
  playerTimerContainerMy: {
    top: -deviceHeight / 6,
    right: 10,
  },
  playerTimerContainerFirst: {
    transform: [{ rotate: '90deg' }],
    right: -deviceWidth * 0.16,
  },
  playerTimerContainerSecond: {
    right: -deviceWidth * 0.13,
  },
  playerTimerContainerThird: {
    transform: [{ rotate: '270deg' }],
    left: -deviceWidth * 0.16,
  },
  nameContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    backgroundColor: 'black',
    left: '50%',
  },
  playerNameContainerCommon: {
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    zIndex: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.semanticHighlight,
    borderRadius: 40,
    position: 'absolute',
    top: 0,
  },
  commonTextStyles: {
    fontFamily: fonts.ptsans.regular,
    fontSize: 20,
    zIndex: 20,
    color: 'white',
  },
  playerCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerCardsContainerFirst: {
    marginTop: 20,
    transform: [{ rotate: '180deg' }],
  },
  playerCardsContainerSecond: {
    marginTop: 20,
    transform: [{ rotate: '180deg' }],
  },
  playerCardsContainerThird: {
    marginTop: 20,
    transform: [{ rotate: '180deg' }],
  },
  trumpContainer: {
    position: 'absolute',
    bottom: 20,
    zIndex: 49,
    backgroundColor: colors.trumpContainer,
    borderRadius: 100,
    ...squareSize(normalize(131)),
    alignItems: 'center',
    justifyContent: 'center',
  },
  trumpContainerMy: {
    top: -deviceHeight / 6,
    left: 10,
  },
  playerTrumpContainerFirst: {
    bottom: -deviceWidth / 20,
    alignSelf: 'center',
    transform: [{ rotate: '90deg' }],
    ...squareSize(normalize(90)),
  },
  playerTrumpContainerSecond: {
    bottom: -deviceWidth / 20,
    alignSelf: 'center',
    transform: [{ rotate: '0deg' }],
    ...squareSize(normalize(90)),
  },
  playerTrumpContainerThird: {
    bottom: -deviceHeight / 30,
    alignSelf: 'center',
    transform: [{ rotate: '-90deg' }],
    ...squareSize(normalize(90)),
  },
})
