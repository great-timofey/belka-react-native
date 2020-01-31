import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import {
  iconChatActive,
  iconShopActive,
  iconSettingsActive,
  iconRatingActive,
  iconRating,
  iconShop,
  iconSettings,
  iconChat,
  iconGameActive,
  iconGame
} from '@global/images'
import { Ratings, Chat, Main, Shop, Rooms, BelkaGame, Settings, CreateGame } from '@scenes'
import { TabBar } from '@components'
import { HeaderWithUserData } from '@components/Header/WithUserData'
import { HeaderWithBackButton } from '@components/Header/WithBackButton'

import * as SCENES_NAMES from './names'

const noTabBarScenes = [SCENES_NAMES.BELKA, SCENES_NAMES.CREATE_GAME]

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
    [SCENES_NAMES.CREATE_GAME]: {
      screen: CreateGame,
      navigationOptions: {
        title: 'Создание игры',
        gestureEnabled: false,
        header: () => <HeaderWithBackButton title="Создание игры" />
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
      headerTitle: () => <HeaderWithUserData />
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
          source={focused ? iconSettingsActive : iconSettings}
        />
      )
    }
  },
  [SCENES_NAMES.RATINGS_STACK]: {
    screen: ratingsStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 28, height: 28 }} source={focused ? iconRatingActive : iconRating} />
      )
    }
  },
  [SCENES_NAMES.MAIN_STACK]: {
    screen: mainStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 80, height: 80 }} source={focused ? iconGameActive : iconGame} />
      )
    }
  },
  [SCENES_NAMES.CHAT_STACK]: {
    screen: chatStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 28, height: 30 }} source={focused ? iconChatActive : iconChat} />
      )
    }
  },
  [SCENES_NAMES.SHOP_STACK]: {
    screen: shopStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image style={{ width: 28, height: 28 }} source={focused ? iconShopActive : iconShop} />
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
