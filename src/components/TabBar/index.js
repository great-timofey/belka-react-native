import React, { memo } from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'

import { tabBarBackground, tabBarBackgroundPad } from '@global/images'

import styles from './styles'

export const TabBar = memo(function(props) {
  const {
    renderIcon,
    navigation,
    navigation: {
      state: { routes, index: activeRouteIndex }
    }
  } = props

  return (
    <ImageBackground style={styles.wrapper} source={tabBarBackgroundPad}>
      <ImageBackground style={styles.container} source={tabBarBackground}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex

          return (
            <TouchableOpacity
              key={route.key}
              style={[styles.button, styles[route.routeName]]}
              onPress={() => navigation.navigate(route.routeName)}
            >
              {renderIcon({ route, focused: isRouteActive })}
            </TouchableOpacity>
          )
        })}
      </ImageBackground>
    </ImageBackground>
  )
})
