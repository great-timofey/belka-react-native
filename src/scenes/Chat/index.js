import React, { memo } from 'react'
import { Text } from 'react-native'

import { ContainerWithBackground } from '@components/ContainerWithBackground'

export const Chat = memo(function() {
  return (
    <ContainerWithBackground>
      <Text>chat</Text>
    </ContainerWithBackground>
  )
})
