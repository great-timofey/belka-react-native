import React, { memo, useCallback } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'
import { iconLockOff, iconLockOn } from '@global/images'

import { icons, styles } from './styles'
import { iconsMap } from './constants'

const iconsProps = ['fin120', 'eggsX4', 'spas30', 'dropAce']

export const Room = memo(function(props) {
  const { locked, clientsData, name, roomId, onPress, options } = props

  const handlePress = useCallback(() => onPress(roomId, options.bet), [onPress, options, roomId])

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <LinearGradient {...gradients.baseCard} style={styles.gradient}>
        <View style={styles.info}>
          <View style={styles.name}>
            <Text style={styles.nameText}>
              {(options && options.name) || name} - {roomId}
            </Text>
            <Image
              style={[styles.lockIcon, locked && styles.lockIconOn]}
              source={locked ? iconLockOn : iconLockOff}
            />
          </View>
          <View style={styles.metainfo}>
            <Text style={styles.metainfoText}>
              Игрока: {(clientsData && clientsData.length) || 0}
            </Text>
            <Text style={styles.metainfoText}>Ставка: {(options && options.bet) || 0}₽</Text>
          </View>
        </View>
        <View style={styles.icons}>
          {options &&
            Object.entries(options).map(
              ([key, value]) =>
                iconsProps.includes(key) && (
                  <Image key={key} style={[icons[key]]} source={iconsMap[key][value]} />
                ),
            )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
})
