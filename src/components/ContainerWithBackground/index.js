import React, { Fragment, memo, useMemo } from 'react'
import { ImageBackground, ScrollView } from 'react-native'

import { backgroundCenter, backgroundFullscreen } from '@global/images'
import { isAndroid } from '@global/styles'

import styles from './styles'

export const ContainerWithBackground = memo(function({
  children,
  size = 'center',
  additionalStyles = [],
}) {
  const Wrapper = isAndroid ? ScrollView : Fragment
  const scrollViewProps = useMemo(
    () =>
      isAndroid
        ? {
            contentContainerStyle: [
              styles.container,
              size === 'center' && styles.containerPadded,
              ...additionalStyles,
            ],
            keyboardShouldPersistTaps: 'handled',
          }
        : {},
    [size, additionalStyles],
  )

  return (
    <Wrapper {...scrollViewProps}>
      <ImageBackground
        resizeMode="cover"
        style={[styles.image, ...additionalStyles]}
        source={size === 'center' ? backgroundCenter : backgroundFullscreen}
      >
        {children}
      </ImageBackground>
    </Wrapper>
  )
})
