import React, { memo, useCallback } from 'react'
import { Image, ImageBackground, Text } from 'react-native'

import { iconPlayerReady, iconLevel, userDefaultAvatar } from '@global/images'

import styles from './styles'

export const Avatar = memo(function({ backgroundImage = userDefaultAvatar, check, level }) {
  const getForegroundImage = useCallback(() => {
    if (level) {
      return (
        <ImageBackground style={styles.iconLevel} source={iconLevel}>
          <Text style={styles.levelText}>8</Text>
        </ImageBackground>
      )
    }

    return check ? (
      <Image source={iconPlayerReady} style={[styles.iconLevel, styles.iconLevelSmall]} />
    ) : (
      <></>
    )
  }, [level, check])

  return (
    <ImageBackground style={[styles.avatar, !level && styles.avatarSmall]} source={backgroundImage}>
      {getForegroundImage()}
    </ImageBackground>
  )
})
