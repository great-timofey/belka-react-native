import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { Rooms } from '@scenes/Rooms'
import { BelkaGame } from '@scenes/BelkaGame'
import { Settings } from '@scenes/Settings'
import {
  chatActiveIcon,
  shopActiveIcon,
  settingsActiveIcon,
  tournamentActiveIcon,
  tournamentIcon,
  shopIcon,
  settingsIcon,
  chatIcon,
  gameActiveIcon,
  gameIcon
} from '@global/images'
import { Ratings } from '@scenes/Ratings'
import { Chat } from '@scenes/Chat'
import { Main } from '@scenes/Main'
import { Shop } from '@scenes/Shop'
import { TabBar } from '@components/TabBar'

import * as SCENES_NAMES from './names'

const settingsStack = createStackNavigator({
  [SCENES_NAMES.SETTINGS]: Settings
})
const ratingsStack = createStackNavigator({
  [SCENES_NAMES.RATINGS]: Ratings
})
const chatStack = createStackNavigator({
  [SCENES_NAMES.CHAT]: Chat
})
const gameStack = createStackNavigator({
  [SCENES_NAMES.MAIN]: Main,
  [SCENES_NAMES.ROOMS]: {
    screen: Rooms,
    navigationOptions: {
      title: 'Rooms'
    }
  },
  [SCENES_NAMES.BELKA]: {
    screen: BelkaGame,
    navigationOptions: {
      title: 'Belka Game',
      gestureEnabled: false,
      headerShown: false
    }
  }
})
const shopStack = createStackNavigator({
  [SCENES_NAMES.SHOP]: Shop
})

const rootStack = {
  [SCENES_NAMES.SETTINGS_STACK]: {
    screen: settingsStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image
          style={{ width: 30, height: 35 }}
          source={focused ? settingsActiveIcon : settingsIcon}
        />
      )
    }
  },
  [SCENES_NAMES.RATINGS_STACK]: {
    screen: ratingsStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image
          style={{ width: 35, height: 35 }}
          source={focused ? tournamentActiveIcon : tournamentIcon}
        />
      )
    }
  },
  [SCENES_NAMES.GAME_STACK]: {
    screen: gameStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 80, height: 80 }} source={focused ? gameActiveIcon : gameIcon} />
      )
    }
  },
  [SCENES_NAMES.CHAT_STACK]: {
    screen: chatStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 30, height: 35 }} source={focused ? chatActiveIcon : chatIcon} />
      )
    }
  },
  [SCENES_NAMES.SHOP_STACK]: {
    screen: shopStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 30, height: 30 }} source={focused ? shopActiveIcon : shopIcon} />
      )
    }
  }
}

const RootNavigator = createBottomTabNavigator(rootStack, {
  tabBarComponent: TabBar,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#4F4F4F',
    inactiveTintColor: '#ddd'
    // if (!navigationState) return <></>
    // style: {
    //   marginBottom: isAndroid && normalize(25),
    // },
  }
})
export default createAppContainer(RootNavigator)
