import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import { View, Image } from 'react-native'
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
import { useFormHook } from '@hooks'

import styles from './styles'

const inputs = [
  {
    id: 0,
    startIcon: iconMail,
    styles: [styles.input],
    placeholder: 'Введите e-mail',
    name: 'email',
    validate: fieldValue => fieldValue && fieldValue.trim().length > 1,
    additionalProps: {
      keyboardType: 'email-address',
      returnKeyType: 'next',
      blurOnSubmit: false,
    },
  },
  {
    id: 1,
    styles: [styles.input, styles.inputLast],
    startIcon: iconLockOn,
    placeholder: 'Введите пароль',
    name: 'password',
    validate: fieldValue => fieldValue && fieldValue.trim().length > 3,
    additionalProps: {
      secureTextEntry: true,
      returnKeyType: 'send',
      blurOnSubmit: false,
    },
  },
]

function getInitialState() {
  return inputs.reduce(
    (acc, field) => {
      const { name, validate } = field
      acc.inputs[name] = ''
      acc.rules.push([name, validate])
      return acc
    },
    { inputs: {}, rules: [] },
  )
}

const inputsMap = getInitialState()

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

  const onSubmit = useCallback(args => {
    console.log('finish')

    console.log(signIn(args))
    // reduxDispatch(signIn(args))
  }, [])

  const { error } = useSelector(state => state.common)
  const {
    state,
    onInputsChangeHandler,
    onSubmitEditingHandler,
    onSubmitFormHandler,
    onFocusHandler,
    onBlurHandler,
  } = useFormHook({
    refs,
    validationRules: inputsMap.rules,
    initialState: inputsMap.inputs,
    onFocus,
    onUnfocus,
    onSubmit,
  })

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
    <ContainerWithBackground size="full" additionalStyles={[styles.container]}>
      <Image source={bootsplashLogo} style={[styles.logo, minifyImage && styles.logoSmall]} />

      <BelkaTypography bold style={[styles.text, styles.title]}>
        Вход
      </BelkaTypography>
      {inputs.map((input, index) => (
        <BelkaInput
          key={input.id}
          containerAdditionalStyles={input.styles}
          startIcon={input.startIcon}
          placeholder={input.placeholder}
          onChangeText={onInputsChangeHandler[index]}
          value={state[input.name]}
          inputAdditionalProps={{
            ...input.additionalProps,
            ...{
              onSubmitEditing:
                index === inputs.length - 1 ? onSubmitFormHandler : onSubmitEditingHandler,
              onFocus: onFocusHandler,
              ref: refs[index],
              onBlur: onBlurHandler,
            },
          }}
        />
      ))}
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
        <BelkaButton
          additionalStyles={[styles.button]}
          onPress={onSubmitFormHandler}
          title="Войти"
        />
      </View>
      <ErrorModal open={!!error} closeCallback={closeModal} />
    </ContainerWithBackground>
  )
})
