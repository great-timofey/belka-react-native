import React, { memo } from 'react'
import { Image, TextInput, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors, gradients } from '@global/styles'

import styles from './styles'

export const BelkaInput = memo(function({
  onChangeText,
  startIcon,
  endIcon,
  value,
  placeholder,
  error,
  errorText,
  containerAdditionalStyles = [],
  inputAdditionalStyles = [],
  inputAdditionalProps = {},
}) {
  return (
    <View style={[styles.container, ...containerAdditionalStyles, error && styles.containerError]}>
      {startIcon && (
        <Image resizeMode="contain" source={startIcon} style={[styles.icon, styles.startIcon]} />
      )}
      <LinearGradient {...gradients.baseCard} style={styles.gradient}>
        <TextInput
          style={[
            styles.input,
            startIcon && styles.inputWithStartIcon,
            endIcon && styles.inputWithEndIcon,
            errorText && error && styles.inputError,
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
      {errorText && error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  )
})
