import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
  BelkaTypography,
  ContainerWithBackground,
  BelkaButton,
  ErrorModal,
  Form,
} from '@components'
import { bootsplashLogo } from '@global/images'
import { signUp } from '@redux/auth/actions'
import { clearError } from '@redux/common/actions'
import { getInitialFormState } from '@utils'

import styles from './styles'
import { inputsData } from './constants'

const formState = getInitialFormState(inputsData)

export const SignUp = memo(function() {
  const reduxDispatch = useDispatch()
  const { error } = useSelector(state => state.common)
  const loginRef = useRef(null)
  const mailRef = useRef(null)
  const passwordRef = useRef(null)

  const refs = useMemo(() => [loginRef, mailRef, passwordRef], [loginRef, mailRef, passwordRef])
  const [minifyImage, setMinifyImage] = useState(false)

  const onFocus = useCallback(() => {
    setMinifyImage(true)
  }, [])

  const onUnfocus = useCallback(() => {
    setMinifyImage(false)
  }, [])

  const closeModal = useCallback(() => {
    reduxDispatch(clearError())
  }, [reduxDispatch])

  const onSubmit = useCallback(
    signUpData => {
      reduxDispatch(signUp(signUpData))
    },
    [reduxDispatch],
  )

  return (
    <ContainerWithBackground needPersistTaps size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} style={[styles.logo, minifyImage && styles.logoSmall]} />

      <BelkaTypography bold style={[styles.text, styles.title]}>
        Регистрация
      </BelkaTypography>
      <Form
        inputs={inputsData}
        onFocus={onFocus}
        onUnfocus={onUnfocus}
        refs={refs}
        validationRules={formState.rules}
        initialState={formState.initialState}
        onSubmit={onSubmit}
        formControls={[
          <BelkaButton
            additionalStyles={[styles.button, styles.buttonRegister]}
            title="Зарегистрироваться"
          />,
        ]}
      />

      <ErrorModal open={!!error} closeCallback={closeModal} />
    </ContainerWithBackground>
  )
})
