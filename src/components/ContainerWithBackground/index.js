import React, { Fragment, memo, useMemo } from 'react'
import { ImageBackground, ScrollView } from 'react-native'

import { backgroundCenter, backgroundFullscreen } from '@global/images'
import { isAndroid } from '@global/styles'

import styles from './styles'

export const ContainerWithBackground = memo(function({
  children,
  size = 'center',
  needPersistTaps,
  additionalStyles = [],
}) {
  const useWrapper = isAndroid && needPersistTaps
  const Wrapper = useWrapper ? ScrollView : Fragment

  const wrapperStyleProps = useMemo(
    () => [styles.container, size === 'center' && styles.containerPadded, ...additionalStyles],
    [additionalStyles, size],
  )

  const scrollViewProps = useMemo(
    () =>
      useWrapper
        ? {
            contentContainerStyle: [...wrapperStyleProps],
            keyboardShouldPersistTaps: 'handled',
          }
        : {},
    [useWrapper, wrapperStyleProps],
  )

  return (
    <Wrapper {...scrollViewProps}>
      <ImageBackground
        resizeMode="cover"
        style={useWrapper ? [styles.image, ...additionalStyles] : wrapperStyleProps}
        source={size === 'center' ? backgroundCenter : backgroundFullscreen}
      >
        {children}
      </ImageBackground>
    </Wrapper>
  )
})
