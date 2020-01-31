import React, { memo, useState } from 'react'
import { View } from 'react-native'

import { ContainerWithBackground, BelkaInput } from '@components'
import { iconLockOff } from '@global/images'

import styles from './styles'

export const CreateGame = memo(function() {
  const [password, setPassword] = useState()

  return (
    <ContainerWithBackground>
      <View style={styles.container}>
        <BelkaInput
          style={[styles.input]}
          onChangeText={setPassword}
          placeholder="Введите пароль для игры"
          value={password}
          endIcon={iconLockOff}
          inputAdditionalProps={{
            autoCompleteType: 'off'
          }}
        />
      </View>
    </ContainerWithBackground>
  )
})
