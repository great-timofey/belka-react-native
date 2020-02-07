import {
  icon120FalseGold,
  icon120TrueGold,
  iconAceTrueGold,
  iconChatFalseGold,
  iconEggX4FalseGold,
  iconAceFalseGold,
  iconChatTrueGold,
  iconEggX4TrueGold,
  iconWingsGold,
  iconWingsWhite,
} from '@global/images'

export const iconsMap = {
  eggsX4: {
    true: iconEggX4TrueGold,
    false: iconEggX4FalseGold,
  },
  dropAce: {
    true: iconAceTrueGold,
    false: iconAceFalseGold,
  },
  spas30: {
    true: iconWingsGold,
    false: iconWingsWhite,
  },
  chat: {
    true: iconChatTrueGold,
    false: iconChatFalseGold,
  },
  fin120: {
    true: icon120TrueGold,
    false: icon120FalseGold,
  },
}
