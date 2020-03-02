import { StatusBar, StyleSheet } from 'react-native'

import {
  deviceHeight,
  CARD_WIDTH,
  colors,
  fonts,
  squareSize,
  normalize,
  deviceWidth,
  TOP_PLAYER_OFFSET,
  isIOS,
  CARD_HEIGHT,
  isIphoneXOrBigger,
} from '@global/styles'

const CONTAINER_SIZE = deviceWidth / 3

export default StyleSheet.create({
  commonPlayerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    ...squareSize(CONTAINER_SIZE),
  },
  playerContainer: {
    top: deviceHeight - CARD_HEIGHT * (isIphoneXOrBigger ? 2 : 1.5),
  },
  FirstContainer: {
    top: deviceHeight * TOP_PLAYER_OFFSET + (isIOS ? 0 : StatusBar.currentHeight),
    left: 10,
    transform: [{ rotate: '-90deg' }],
  },
  SecondContainer: {
    top: 10,
    left: deviceWidth / 2 - CONTAINER_SIZE / 2,
  },
  ThirdContainer: {
    top: deviceHeight * TOP_PLAYER_OFFSET + (isIOS ? 0 : StatusBar.currentHeight),
    left: deviceWidth - 10 - CONTAINER_SIZE,
    transform: [{ rotate: '90deg' }],
  },
  playerBoardContainer: {
    position: 'absolute',
    width: deviceWidth / 3,
    height: 50,
    alignItems: 'center',
  },
  playerCardContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  playerBoardContainerMy: {
    position: 'absolute',
    width: deviceWidth,
    height: 60,
    paddingLeft: normalize(CARD_WIDTH),
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
    height: normalize(90),
    zIndex: 20,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'black',
    justifyContent: 'center',
    borderRadius: 40,
    position: 'absolute',
    top: 0,
  },
  playerNameActive: {
    borderColor: colors.semanticHighlight,
  },
  commonTextStyles: {
    fontFamily: fonts.ptsans.regular,
    fontSize: 18,
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
  playerCardsContainer3: {
    transform: [{ rotate: '170deg' }],
  },
  playerCardsContainer2: {
    transform: [{ rotate: '170deg' }],
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
  cardAlone: {
    transform: [{ translateY: -30 }, { translateX: 0 }],
  },
})
