import { iconLockOn, iconMail } from '@global/images'

import styles from './styles'

export const inputsData = [
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
