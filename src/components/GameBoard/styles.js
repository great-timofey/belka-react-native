import { StyleSheet } from 'react-native'

import { colors, deviceWidth, fonts } from '@global/styles'

export default StyleSheet.create({
  gameBoardContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  myPlayerContainer: {
    width: deviceWidth,
    height: 100,
    position: 'absolute',
    bottom: 0,
  },
  roundResultsContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  resultsBlack: {
    transform: [{ translateX: -40 }],
  },
  resultsRed: {
    transform: [{ translateX: 40 }],
  },
  modalSubhead: {
    textAlign: 'center',
    fontFamily: fonts.ptsans.bold,
    color: colors.white,
    marginBottom: 10,
    fontSize: 15,
  },
  scoresHead: {
    color: colors.semanticAttention,
    fontFamily: fonts.ptsans.regular,
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 5,
  },
  teamsList: {},
  teamContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  teamContainerLast: {
    marginBottom: 20,
  },
  teamName: {
    fontFamily: fonts.ptsans.regular,
    color: colors.white,
    marginRight: 5,
  },
  teamMembers: {
    fontFamily: fonts.ptsans.regular,
    color: colors.semanticSecondary,
  },
  teamResult: {
    fontFamily: fonts.ptsans.regular,
    color: colors.white,
    marginLeft: 'auto',
  },
})
