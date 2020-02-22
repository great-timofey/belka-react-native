import React, { memo, useState } from 'react'
import { Image, TextInput, View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors, gradients } from '@global/styles'
import { iconToggleClose, iconToggleOpen } from '@global/images'

import styles from './styles'

export const BelkaInput = memo(function({
  onChangeText,
  startIcon,
  endIcon,
  value,
  placeholder,
  error,
  errorText,
  passwordWithToggleIcon,
  containerAdditionalStyles = [],
  inputAdditionalStyles = [],
  inputAdditionalProps = {},
}) {
  const [showToggleIcon, setShowToggleIcon] = useState(false)

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
          {...(passwordWithToggleIcon && !showToggleIcon && { ...{ secureTextEntry: true } })}
        />
      </LinearGradient>
      {endIcon && (
        <Image resizeMode="contain" source={endIcon} style={[styles.icon, styles.endIcon]} />
      )}
      {passwordWithToggleIcon && (
        <TouchableOpacity style={styles.endIcon} onPress={() => setShowToggleIcon(!showToggleIcon)}>
          <Image
            resizeMode="contain"
            source={showToggleIcon ? iconToggleOpen : iconToggleClose}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
      {errorText && error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  )
})
