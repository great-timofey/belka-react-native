import React, { memo } from 'react'
import { Text } from 'react-native'

import { ContainerWithBackground } from '@components/ContainerWithBackground'

export const Settings = memo(function() {
  return (
    <ContainerWithBackground>
      <Text>Settings</Text>
    </ContainerWithBackground>
  )
})
