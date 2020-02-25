import React, { memo, useCallback, useMemo, useRef } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'react-navigation-hooks'

import { BelkaTypography, ContainerWithBackground, BelkaButton, Form } from '@components'
import { bootsplashLogo } from '@global/images'
import { signUp } from '@redux/auth/actions'
import { clearError } from '@redux/common/actions'
import { getInitialFormState } from '@utils'
import { LOGIN } from '@navigation/names'

import styles from './styles'
import { inputsData } from './constants'

const formState = getInitialFormState(inputsData)

export const SignUp = memo(function() {
  const reduxDispatch = useDispatch()
  const { navigate } = useNavigation()
  const { error } = useSelector(state => state.common)

  const loginRef = useRef(null)
  const mailRef = useRef(null)
  const passwordRef = useRef(null)

  const refs = useMemo(() => [loginRef, mailRef, passwordRef], [loginRef, mailRef, passwordRef])

  const onFocus = useCallback(() => {
    if (error) reduxDispatch(clearError())
  }, [reduxDispatch, error])

  const onSubmit = useCallback(
    signUpData => {
      reduxDispatch(signUp(signUpData))
    },
    [reduxDispatch],
  )

  return (
    <ContainerWithBackground needPersistTaps size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} resizeMode="contain" style={[styles.logo]} />

      <BelkaTypography bold style={[styles.text, styles.title]}>
        Регистрация
      </BelkaTypography>

      <Form
        inputs={inputsData}
        onFocus={onFocus}
        refs={refs}
        validationRules={formState.rules}
        initialState={formState.initialState}
        initialErrorState={formState.initialErrorState}
        onSubmit={onSubmit}
        formControls={[
          <BelkaButton
            additionalStyles={[styles.button, styles.buttonRegister]}
            title="Зарегистрироваться"
          />,
        ]}
      />

      <TouchableOpacity
        onPress={() => navigate(LOGIN)}
        style={[styles.forgetPassword]}
        hitSlop={{ top: 10, bottom: 10, left: 70, right: 70 }}
      >
        <BelkaTypography bold style={[styles.text, styles.title, styles.forgetPasswordText]}>
          Войти в игру
        </BelkaTypography>
      </TouchableOpacity>
    </ContainerWithBackground>
  )
})
