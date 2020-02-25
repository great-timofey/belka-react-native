import React, { memo, useCallback } from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'

import styles from './styles'

export const BelkaButton = memo(function({
  title,
  loading,
  onPress,
  children,
  appearance = 'Primary',
  additionalStyles = [],
}) {
  const renderInnerPart = useCallback(() => {
    if (loading) {
      return <ActivityIndicator />
    }

    return title ? (
      <Text style={[styles.title, styles[`title${appearance}`]]}>{title}</Text>
    ) : (
      children
    )
  }, [loading, appearance, title, children])

  return (
    <TouchableOpacity
      activeOpacity={loading ? 1 : 0}
      style={[styles.button, styles[`button${appearance}`], ...additionalStyles]}
      onPress={() => (loading ? null : onPress())}
    >
      <LinearGradient {...gradients.buttons[appearance]} style={styles.gradient}>
        {renderInnerPart()}
      </LinearGradient>
    </TouchableOpacity>
  )
})
