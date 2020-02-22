import { iconLockOn, iconMail } from '@global/images'
import { validateEmail } from '@utils'

import styles from './styles'

export const inputsData = [
  {
    id: 0,
    startIcon: iconMail,
    styles: [styles.input],
    placeholder: 'Введите e-mail',
    name: 'email',
    errorText: 'Неправильный e-mail',
    validate: fieldValue => fieldValue && fieldValue.trim().length > 0 && validateEmail(fieldValue),
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
    errorText: 'Минимальное количество символов: 8',
    passwordWithToggleIcon: true,
    validate: fieldValue => fieldValue && fieldValue.trim().length > 7,
    additionalProps: {
      returnKeyType: 'send',
      blurOnSubmit: false,
    },
  },
]
