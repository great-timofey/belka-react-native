import { StyleSheet } from 'react-native'

import { colors } from '@global/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    padding: 30,
    marginBottom: 10,
  },
  cardPlayers: {
    flexWrap: 'wrap',
    height: 140,
    // padding: 20,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  readiness: {
    color: colors.semanticAttention,
    fontSize: 15,
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 12,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonExit: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
  },
})
