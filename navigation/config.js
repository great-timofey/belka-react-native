import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { belkaGameScreenName, roomsScreenName } from './names'
import { Rooms } from '../Containers/Rooms'
import { BelkaGame } from '../Containers/BelkaGame'

const rootStack = {
  [roomsScreenName]: {
    screen: Rooms,
    navigationOptions: {
      title: 'Rooms'
    }
  },
  [belkaGameScreenName]: {
    screen: BelkaGame,
    navigationOptions: {
      title: 'Belka Game',
      gestureEnabled: false,
      headerStyle: {
        elevation: 0
      }
    }
  }
}

const RootNavigator = createStackNavigator(rootStack)
export default createAppContainer(RootNavigator)
