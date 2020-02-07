import { StyleSheet } from 'react-native'

import { colors, deviceWidth } from '@global/styles'

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    alignSelf: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  inputLast: {
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    width: deviceWidth * 0.44,
    height: 50,
  },
  buttonRegister: {
    backgroundColor: colors.semanticNegative,
  },
})
