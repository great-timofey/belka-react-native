import React, { memo, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { View, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
  BelkaInput,
  BelkaTypography,
  ContainerWithBackground,
  BelkaButton,
  ErrorModal,
} from '@components'
import { bootsplashLogo, iconLockOn, iconMail, iconUser } from '@global/images'
import { signUp } from '@redux/auth/actions'
import { clearError } from '@redux/common/actions'

import styles from './styles'

export const SignUp = memo(function() {
  const reduxDispatch = useDispatch()
  const { error } = useSelector(state => state.common)
  const loginRef = useRef(null)
  const mailRef = useRef(null)
  const passwordRef = useRef(null)

  const refs = useMemo(() => [loginRef, mailRef, passwordRef], [loginRef, mailRef, passwordRef])

  const [minifyImage, setMinifyImage] = useState(false)
  const [activeInputIndex, setActiveInputIndex] = useState(0)
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    login: '',
    password: '',
    email: '',
  })

  const incrementActiveInputIndex = useCallback(() => {
    setActiveInputIndex(activeInputIndex + 1)
  }, [activeInputIndex, setActiveInputIndex])

  const onFieldChange = useCallback(fieldName => value => dispatch({ [fieldName]: value }), [])

  const onFocus = useCallback(() => {
    setMinifyImage(true)
  }, [])

  const onFinishInput = useCallback(() => {
    const { email, login, password } = state
    if (email.trim() && login.trim() && password.trim()) {
      reduxDispatch(signUp(state.email, state.login, state.password))
    }
  }, [state, reduxDispatch])

  useEffect(() => {
    if (refs && activeInputIndex !== 0) {
      refs[activeInputIndex].current.focus()
    }
  }, [activeInputIndex, refs])

  const closeModal = useCallback(() => {
    reduxDispatch(clearError())
  }, [reduxDispatch])

  return (
    <ContainerWithBackground size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} style={[styles.logo, minifyImage && styles.logoSmall]} />

      <BelkaTypography bold style={[styles.text, styles.title]}>
        Регистрация
      </BelkaTypography>
      <BelkaInput
        containerAdditionalStyles={[styles.input]}
        startIcon={iconUser}
        placeholder="Введите логин"
        onChangeText={onFieldChange('login')}
        value={state.login}
        inputAdditionalProps={{
          returnKeyType: 'next',
          blurOnSubmit: false,
          onFocus,
          onSubmitEditing: incrementActiveInputIndex,
          ref: loginRef,
        }}
      />
      <BelkaInput
        containerAdditionalStyles={[styles.input]}
        startIcon={iconMail}
        placeholder="Введите e-mail"
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
        <BelkaButton
          additionalStyles={[styles.button, styles.buttonRegister]}
          onPress={onFinishInput}
          title="Зарегистрироваться"
        />
      </View>
      <ErrorModal open={!!error} closeCallback={closeModal} />
    </ContainerWithBackground>
  )
})
