import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

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
import { Ratings, Chat, Main, Shop, Rooms, BelkaGame, Settings } from '@scenes'
import { TabBar, Header } from '@components'

import * as SCENES_NAMES from './names'

const noTabBarScenes = [SCENES_NAMES.BELKA]

const settingsStack = createStackNavigator({
  [SCENES_NAMES.SETTINGS]: Settings
})
const ratingsStack = createStackNavigator({
  [SCENES_NAMES.RATINGS]: Ratings
})
const chatStack = createStackNavigator({
  [SCENES_NAMES.CHAT]: Chat
})
const mainStack = createStackNavigator(
  {
    [SCENES_NAMES.MAIN]: Main,
    [SCENES_NAMES.ROOMS]: {
      screen: Rooms,
      navigationOptions: {
        title: 'Rooms',
        headerLeft: () => null
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
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => <Header />
    },
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: !noTabBarScenes.includes(
        navigation.state.routes[navigation.state.index].routeName
      )
    })
  }
)

const shopStack = createStackNavigator({
  [SCENES_NAMES.SHOP]: Shop
})

const rootStack = {
  [SCENES_NAMES.SETTINGS_STACK]: {
    screen: settingsStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image
          style={{ width: 25, height: 30 }}
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
          style={{ width: 28, height: 28 }}
          source={focused ? tournamentActiveIcon : tournamentIcon}
        />
      )
    }
  },
  [SCENES_NAMES.MAIN_STACK]: {
    screen: mainStack,
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
        <Image style={{ width: 28, height: 30 }} source={focused ? chatActiveIcon : chatIcon} />
      )
    }
  },
  [SCENES_NAMES.SHOP_STACK]: {
    screen: shopStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 28, height: 28 }} source={focused ? shopActiveIcon : shopIcon} />
      )
    }
  }
}

const RootNavigator = createBottomTabNavigator(rootStack, {
  tabBarComponent: TabBar,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  initialRouteName: SCENES_NAMES.MAIN_STACK,
  tabBarOptions: {
    showLabel: false
  }
})
export default createAppContainer(RootNavigator)
