import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'

import styles from './styles'

export const BelkaSegmentedControl = memo(function({
  tabs,
  additionalStyles = [],
  onChange,
  activeTabIndex
}) {
  return (
    <View style={[styles.container, ...additionalStyles]}>
      <LinearGradient {...gradients.buttonPrimary} style={styles.gradient}>
        {tabs.map(({ id, title }, index) => {
          const active = activeTabIndex === index
          return (
            <TouchableOpacity
              activeOpacity={1}
              key={id}
              style={[
                styles.button,
                active && styles.buttonActive,
                index === 0 && styles.buttonLeft,
                index === tabs.length - 1 && styles.buttonRight
              ]}
              onPress={() => !active && onChange(index)}
            >
              <Text style={[styles.text]}>{title}</Text>
            </TouchableOpacity>
          )
        })}
      </LinearGradient>
    </View>
  )
})
