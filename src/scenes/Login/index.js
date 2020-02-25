import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'react-navigation-hooks'

import {
  BelkaTypography,
  ContainerWithBackground,
  BelkaSwitch,
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
  const { error } = useSelector(state => state.common)
  const [loading, setLoading] = useState(false)

  const passwordRef = useRef(null)
  const mailRef = useRef(null)

  const refs = useMemo(() => [mailRef, passwordRef], [mailRef, passwordRef])

  const [rememberPassword, setRememberPassword] = useState(false)

  const onFocus = useCallback(() => {
    if (error) reduxDispatch(clearError())
  }, [reduxDispatch, error])

  const onSubmit = useCallback(
    signInData => {
      setLoading(true)
      reduxDispatch(signIn(signInData))
    },
    [reduxDispatch],
  )

  const handleRememberPasswordChange = useCallback(() => {
    setRememberPassword(!rememberPassword)
  }, [rememberPassword])

  const onSignUpRequest = useCallback(() => {
    navigate(SIGN_UP)
  }, [navigate])

  return (
    <ContainerWithBackground needPersistTaps size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} resizeMode="contain" style={[styles.logo]} />

      <BelkaTypography bold style={[styles.text, styles.title]}>
        Вход
      </BelkaTypography>

      <Form
        inputs={inputsData}
        onFocus={onFocus}
        refs={refs}
        validationRules={formState.rules}
        initialState={formState.initialState}
        initialErrorState={formState.initialErrorState}
        onSubmit={onSubmit}
        additionalElements={
          <View style={styles.additionalElementsContainer}>
            <BelkaTypography style={[styles.text]}>Запомнить пароль</BelkaTypography>
            <BelkaSwitch
              style={[styles.switch]}
              onChange={handleRememberPasswordChange}
              value={rememberPassword}
            />
            {error && <BelkaTypography style={[styles.error]}>{error}</BelkaTypography>}
          </View>
        }
        formControls={[
          <BelkaButton
            loading={loading}
            additionalStyles={[styles.button, styles.buttonRegister]}
            onPress={onSignUpRequest}
            appearance="Negative"
            title="Регистрация"
          />,
          <BelkaButton loading={loading} additionalStyles={[styles.button]} title="Войти" />,
        ]}
      />

      <TouchableOpacity
        onPress={() => console.log(1)}
        style={[styles.forgetPassword]}
        hitSlop={{ top: 10, bottom: 10, left: 70, right: 70 }}
      >
        <BelkaTypography bold style={[styles.text, styles.title, styles.forgetPasswordText]}>
          Забыли пароль?
        </BelkaTypography>
      </TouchableOpacity>
    </ContainerWithBackground>
  )
})
