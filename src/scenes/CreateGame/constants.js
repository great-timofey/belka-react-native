import {
  icon120FalseGold,
  icon120FalseWhite,
  icon120TrueGold,
  icon120TrueWhite,
  iconAceFalseGold,
  iconAceFalseWhite,
  iconAceTrueGold,
  iconAceTrueWhite,
  iconChatFalseGold,
  iconChatFalseWhite,
  iconChatTrueGold,
  iconChatTrueWhite,
  iconEggX4FalseGold,
  iconEggX4FalseWhite,
  iconEggX4TrueGold,
  iconEggX4TrueWhite,
  iconWingsGold,
  iconWingsWhite,
} from '@global/images'

export const NEW_GAME_DATA_ENTRIES = [
  [
    'eggsX4',
    'В предыдущем раздаче обе команды набрали по 60 очков(Яйца). Количество глаз в следующем удваиваем или просто добавляется 4 глаза?',
  ],
  ['ace', 'Если масть еще не играли, то можно ли скидывать некозырного туза?'],
  ['spas30', 'Спас 30'],
  ['chat', 'Чат отключен'],
  ['fin120', 'Голый - конец игры'],
]

export const NEW_GAME_ICONS = {
  eggsX4: {
    true: {
      white: iconEggX4TrueWhite,
      gold: iconEggX4TrueGold,
    },
    false: {
      white: iconEggX4FalseWhite,
      gold: iconEggX4FalseGold,
    },
  },
  ace: {
    true: {
      white: iconAceTrueWhite,
      gold: iconAceTrueGold,
    },
    false: {
      white: iconAceFalseWhite,
      gold: iconAceFalseGold,
    },
  },
  spas30: {
    true: {
      white: iconWingsWhite,
      gold: iconWingsGold,
    },
    false: {
      white: iconWingsWhite,
      gold: iconWingsGold,
    },
  },
  chat: {
    true: {
      white: iconChatTrueWhite,
      gold: iconChatTrueGold,
    },
    false: {
      white: iconChatFalseWhite,
      gold: iconChatFalseGold,
    },
  },
  fin120: {
    true: {
      white: icon120TrueWhite,
      gold: icon120TrueGold,
    },
    false: {
      white: icon120FalseWhite,
      gold: icon120FalseGold,
    },
  },
}
