import React, { memo, useCallback, useReducer, useState } from 'react'
import { View, Image } from 'react-native'
import { useDispatch } from 'react-redux'

import {
  BelkaInput,
  BelkaTypography,
  ContainerWithBackground,
  BelkaSwitch,
  BelkaButton,
} from '@components'
import { bootsplashLogo, iconLockOn, iconMail } from '@global/images'
import { signIn } from '@redux/auth/actions'

import styles from './styles'

export const Login = memo(function() {
  const reduxDispatch = useDispatch()
  const [rememberPassword, setRememberPassword] = useState(false)
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    password: '',
    email: '',
  })

  const handleRememberPasswordChange = useCallback(() => {
    setRememberPassword(!rememberPassword)
  }, [rememberPassword])

  const onFieldChange = useCallback(fieldName => value => dispatch({ [fieldName]: value }), [])

  const onLogin = useCallback(() => {
    reduxDispatch(signIn(state.email, state.password))
  }, [reduxDispatch, state.email, state.password])

  return (
    <ContainerWithBackground size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} style={styles.logo} />

      <BelkaTypography bold style={[styles.text, styles.title]}>
        Вход
      </BelkaTypography>
      <BelkaInput
        containerAdditionalStyles={[styles.input]}
        startIcon={iconMail}
        placeholder="Введите email"
        onChangeText={onFieldChange('email')}
        value={state.email}
        inputAdditionalProps={{
          keyboardType: 'email-address',
          returnKeyType: 'next',
        }}
      />
      <BelkaInput
        containerAdditionalStyles={[styles.input, styles.inputLast]}
        startIcon={iconLockOn}
        placeholder="Введите пароль"
        onChangeText={onFieldChange('password')}
        value={state.password}
        inputAdditionalProps={{
          secureTextEntry: true,
          returnKeyType: 'send',
        }}
      />
      <View style={styles.controlsContainer}>
        <BelkaTypography style={[styles.text]}>Запомнить пароль</BelkaTypography>
        <BelkaSwitch onChange={handleRememberPasswordChange} value={rememberPassword} />
      </View>
      <View style={styles.controlsContainer}>
        <BelkaButton
          additionalStyles={[styles.button, styles.buttonRegister]}
          appearance="Negative"
          title="Регистрация"
        />
        <BelkaButton additionalStyles={[styles.button]} onPress={onLogin} title="Войти" />
      </View>
    </ContainerWithBackground>
  )
})
