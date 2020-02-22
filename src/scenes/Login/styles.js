import { StyleSheet } from 'react-native'

import { colors, deviceWidth, deviceHeight } from '@global/styles'

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    alignSelf: 'center',
    width: deviceWidth * 0.73,
    height: deviceHeight * 0.41,
  },
  logoSmall: {
    width: deviceWidth * 0.24,
    height: deviceHeight * 0.14,
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
  switch: {
    marginTop: -30,
  },
  additionalElementsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  error: {
    color: colors.semanticNegative,
    position: 'absolute',
    bottom: -25,
    left: 0,
    fontSize: 15,
  },
  forgetPassword: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  forgetPasswordText: {
    marginBottom: 0,
    fontSize: 16,
  },
})
