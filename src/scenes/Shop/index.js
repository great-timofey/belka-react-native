import React, { memo } from 'react'
import { Text } from 'react-native'

import { ContainerWithBackground } from '@components/ContainerWithBackground'

export const Shop = memo(function() {
  return (
    <ContainerWithBackground>
      <Text>Shop</Text>
    </ContainerWithBackground>
  )
})
