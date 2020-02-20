import React, { memo } from 'react'
import { Text } from 'react-native'

import { FALLBACK_ERROR_MESSAGE } from '@utils'

import { BelkaModal } from '../BelkaModal'

export const ErrorModal = memo(function({ open, closeCallback, error = FALLBACK_ERROR_MESSAGE }) {
  return (
    <BelkaModal
      open={open}
      closeCallback={closeCallback}
      header="Ошибка"
      content={<Text style={{ color: 'white' }}>{error}</Text>}
    />
  )
})
