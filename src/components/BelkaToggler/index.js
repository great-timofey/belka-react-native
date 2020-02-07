import React, { memo } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'
import { toggleThumb } from '@global/images'

import styles from './styles'

export const BelkaToggler = memo(function({
  text,
  trulyKey,
  onPressLeft,
  onPressRight,
  leftIconActive,
  leftIconInactive,
  rightIconActive,
  rightIconInactive,
}) {
  return (
    <View style={styles.item}>
      <Text style={styles.description}>{text}</Text>
      <View style={styles.buttons}>
        <LinearGradient style={styles.gradient} {...gradients.baseCard}>
          <TouchableOpacity style={styles.iconWrapper} onPress={onPressLeft}>
            {!trulyKey && (
              <Image
                resizeMode="contain"
                style={[styles.icon, styles.iconBackground]}
                source={toggleThumb}
              />
            )}
            <Image
              style={[styles.icon, styles.iconForeground]}
              resizeMode="contain"
              source={trulyKey ? leftIconInactive : leftIconActive}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper} onPress={onPressRight}>
            {trulyKey && (
              <Image
                resizeMode="contain"
                style={[styles.icon, styles.iconBackground]}
                source={toggleThumb}
              />
            )}
            <Image
              resizeMode="contain"
              style={[styles.icon, styles.iconForeground]}
              source={trulyKey ? rightIconActive : rightIconInactive}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  )
})
