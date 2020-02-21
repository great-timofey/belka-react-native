import { iconLockOn, iconMail, iconUser } from '@global/images'
import { validateEmail } from '@utils'

import styles from './styles'

export const inputsData = [
  {
    id: 0,
    startIcon: iconUser,
    styles: [styles.input],
    placeholder: 'Введите логин',
    name: 'name',
    errorText: 'Минимальное количество символов: 3',
    validate: fieldValue => fieldValue && fieldValue.trim().length > 2,
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
    errorText: 'Неправильный e-mail',
    validate: fieldValue => fieldValue && fieldValue.trim().length > 0 && validateEmail(fieldValue),
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
    errorText: 'Минимальное количество символов: 8',
    passwordWithToggleIcon: true,
    validate: fieldValue => fieldValue && fieldValue.trim().length > 7,
    additionalProps: {
      returnKeyType: 'send',
      blurOnSubmit: false,
    },
  },
]
