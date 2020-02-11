import React, { memo, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { View, Image, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'react-navigation-hooks'

import {
  BelkaInput,
  BelkaTypography,
  ContainerWithBackground,
  BelkaSwitch,
  BelkaButton,
  ErrorModal,
} from '@components'
import { bootsplashLogo, iconLockOn, iconMail } from '@global/images'
import { signIn } from '@redux/auth/actions'
import { SIGN_UP } from '@navigation/names'
import { clearError } from '@redux/common/actions'

import styles from './styles'

export const Login = memo(function() {
  const reduxDispatch = useDispatch()
  const { navigate } = useNavigation()
  const { error } = useSelector(state => state.common)
  const [minifyImage, setMinifyImage] = useState(false)
  const [rememberPassword, setRememberPassword] = useState(false)
  const [activeInputIndex, setActiveInputIndex] = useState(0)
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    password: '',
    email: '',
  })

  const closeModal = useCallback(() => {
    reduxDispatch(clearError())
  }, [reduxDispatch])
  const passwordRef = useRef(null)
  const mailRef = useRef(null)
  const refs = useMemo(() => [mailRef, passwordRef], [mailRef, passwordRef])

  const incrementActiveInputIndex = useCallback(() => {
    setActiveInputIndex(activeInputIndex + 1)
  }, [activeInputIndex, setActiveInputIndex])

  const handleRememberPasswordChange = useCallback(() => {
    setRememberPassword(!rememberPassword)
  }, [rememberPassword])

  const onFieldChange = useCallback(fieldName => value => dispatch({ [fieldName]: value }), [])

  const onFocus = useCallback(() => {
    setMinifyImage(true)
  }, [])

  useEffect(() => {
    if (refs && activeInputIndex !== 0) {
      refs[activeInputIndex].current.focus()
    }
  }, [activeInputIndex, refs])

  const onFinishInput = useCallback(() => {
    setMinifyImage(false)
    Keyboard.dismiss()
    if (state.email.trim() && state.email.trim()) {
      reduxDispatch(signIn(state.email, state.password))
    }
  }, [state.email, state.password, reduxDispatch])

  const onSignUpRequest = useCallback(() => {
    navigate(SIGN_UP)
  }, [navigate])

  return (
    <ContainerWithBackground size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} style={[styles.logo, minifyImage && styles.logoSmall]} />

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
          blurOnSubmit: false,
          onFocus,
          onSubmitEditing: incrementActiveInputIndex,
          ref: mailRef,
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
          blurOnSubmit: false,
          onFocus,
          onSubmitEditing: onFinishInput,
          ref: passwordRef,
        }}
      />
      <View style={styles.controlsContainer}>
        <BelkaTypography style={[styles.text]}>Запомнить пароль</BelkaTypography>
        <BelkaSwitch onChange={handleRememberPasswordChange} value={rememberPassword} />
      </View>
      <View style={styles.controlsContainer}>
        <BelkaButton
          additionalStyles={[styles.button, styles.buttonRegister]}
          onPress={onSignUpRequest}
          appearance="Negative"
          title="Регистрация"
        />
        <BelkaButton additionalStyles={[styles.button]} onPress={onFinishInput} title="Войти" />
      </View>
      <ErrorModal open={!!error} closeCallback={closeModal} />
    </ContainerWithBackground>
  )
})
