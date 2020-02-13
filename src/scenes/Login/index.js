import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'react-navigation-hooks'

import {
  BelkaTypography,
  ContainerWithBackground,
  BelkaSwitch,
  ErrorModal,
  BelkaButton,
  Form,
} from '@components'
import { bootsplashLogo } from '@global/images'
import { signIn } from '@redux/auth/actions'
import { SIGN_UP } from '@navigation/names'
import { clearError } from '@redux/common/actions'
import { getInitialFormState } from '@utils'

import { inputsData } from './constants'
import styles from './styles'

const formState = getInitialFormState(inputsData)

export const Login = memo(function() {
  const reduxDispatch = useDispatch()
  const { navigate } = useNavigation()

  const passwordRef = useRef(null)
  const mailRef = useRef(null)

  const refs = useMemo(() => [mailRef, passwordRef], [mailRef, passwordRef])

  const [minifyImage, setMinifyImage] = useState(false)
  const [rememberPassword, setRememberPassword] = useState(false)

  const onFocus = useCallback(() => {
    setMinifyImage(true)
  }, [])

  const onUnfocus = useCallback(() => {
    setMinifyImage(false)
  }, [])

  const onSubmit = useCallback(
    signInData => {
      reduxDispatch(signIn(signInData))
    },
    [reduxDispatch],
  )

  const { error } = useSelector(state => state.common)

  const closeModal = useCallback(() => {
    reduxDispatch(clearError())
  }, [reduxDispatch])

  const handleRememberPasswordChange = useCallback(() => {
    setRememberPassword(!rememberPassword)
  }, [rememberPassword])

  const onSignUpRequest = useCallback(() => {
    navigate(SIGN_UP)
  }, [navigate])

  return (
    <ContainerWithBackground needPersistTabs size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} style={[styles.logo, minifyImage && styles.logoSmall]} />

      <BelkaTypography bold style={[styles.text, styles.title]}>
        Вход
      </BelkaTypography>

      <Form
        inputs={inputsData}
        onFocus={onFocus}
        onUnfocus={onUnfocus}
        refs={refs}
        validationRules={formState.rules}
        initialState={formState.initialState}
        onSubmit={onSubmit}
        additionalElements={
          <>
            <BelkaTypography style={[styles.text]}>Запомнить пароль</BelkaTypography>
            <BelkaSwitch onChange={handleRememberPasswordChange} value={rememberPassword} />
          </>
        }
        formControls={[
          <BelkaButton
            additionalStyles={[styles.button, styles.buttonRegister]}
            onPress={onSignUpRequest}
            appearance="Negative"
            title="Регистрация"
          />,
          <BelkaButton additionalStyles={[styles.button]} title="Войти" />,
        ]}
      />
      <ErrorModal open={!!error} closeCallback={closeModal} />
    </ContainerWithBackground>
  )
})
