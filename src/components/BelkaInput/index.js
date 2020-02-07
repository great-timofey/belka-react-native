import React, { memo } from 'react'
import { Image, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors, gradients } from '@global/styles'

import styles from './styles'

export const BelkaInput = memo(function({
  onChangeText,
  startIcon,
  endIcon,
  value,
  placeholder,
  containerAdditionalStyles = [],
  inputAdditionalStyles = [],
  inputAdditionalProps = {},
}) {
  return (
    <View style={[styles.container, ...containerAdditionalStyles]}>
      {startIcon && (
        <Image resizeMode="contain" source={startIcon} style={[styles.icon, styles.startIcon]} />
      )}
      <LinearGradient {...gradients.baseCard} style={styles.gradient}>
        <TextInput
          style={[
            styles.input,
            startIcon && styles.inputWithStartIcon,
            endIcon && styles.inputWithEndIcon,
            ...inputAdditionalStyles,
          ]}
          placeholderTextColor={colors.semanticSecondary}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          {...inputAdditionalProps}
        />
      </LinearGradient>
      {endIcon && (
        <Image resizeMode="contain" source={endIcon} style={[styles.icon, styles.endIcon]} />
      )}
    </View>
  )
})
