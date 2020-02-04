import React, { memo } from 'react'
import { View } from 'react-native'

import { Avatar } from '../Avatar'
import { BelkaTypography } from '../BelkaTypography'

import styles from './styles'

export const PlayerPreparation = memo(function({ name = 'Professional', ready }) {
  return (
    <View style={styles.container}>
      <Avatar check={ready} />
      <BelkaTypography bold style={[styles.text]}>
        {name}
      </BelkaTypography>
    </View>
  )
})
