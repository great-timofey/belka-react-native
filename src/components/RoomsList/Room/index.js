import React, { memo, useCallback, useMemo } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { gradients } from '@global/styles'
import { iconLockOff, iconLockOn } from '@global/images'

import { icons, styles } from './styles'
import { iconsMap } from './constants'

export const Room = memo(function(props) {
  const { password = '', bet, clients, maxClients, name, roomId, onPress, ...rest } = props

  const handlePress = useCallback(() => onPress(roomId), [onPress, roomId])
  const locked = useMemo(() => !!password.trim(), [password])

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <LinearGradient {...gradients.baseCard} style={styles.gradient}>
        <View style={styles.info}>
          <View style={styles.name}>
            <Text style={styles.nameText}>
              {name} - {roomId}
            </Text>
            <Image
              style={[styles.lockIcon, locked && styles.lockIconOn]}
              source={locked ? iconLockOn : iconLockOff}
            />
          </View>
          <View style={styles.metainfo}>
            <Text style={styles.metainfoText}>Игрока: {clients}</Text>
            <Text style={styles.metainfoText}>Ставка: {bet}₽</Text>
          </View>
        </View>
        <View style={styles.icons}>
          {Object.entries(rest).map(([key, value]) => (
            <Image key={key} style={[icons[key]]} source={iconsMap[key][value]} />
          ))}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
})
