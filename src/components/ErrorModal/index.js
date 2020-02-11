import React, { memo } from 'react'
import { Text } from 'react-native'

import { BelkaModal } from '../BelkaModal'

export const ErrorModal = memo(function({ open, closeCallback }) {
  return (
    <BelkaModal
      open={open}
      closeCallback={closeCallback}
      header="Произошла ошибка"
      content={<Text style={{ color: 'white' }}>Попробуйте позднее</Text>}
    />
  )
})
