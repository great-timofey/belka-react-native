import { iconLockOn, iconMail, iconUser } from '@global/images'

import styles from './styles'

export const inputsData = [
  {
    id: 0,
    startIcon: iconUser,
    styles: [styles.input],
    placeholder: 'Введите логин',
    name: 'name',
    validate: fieldValue => fieldValue && fieldValue.trim().length > 1,
    additionalProps: {
      returnKeyType: 'next',
      blurOnSubmit: false,
    },
  },
  {
    id: 1,
    startIcon: iconMail,
    styles: [styles.input],
    placeholder: 'Введите e-mail',
    name: 'email',
    validate: fieldValue => fieldValue && fieldValue.trim().length > 1,
    additionalProps: {
      returnKeyType: 'next',
      keyboardType: 'email-address',
      blurOnSubmit: false,
    },
  },
  {
    id: 2,
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
