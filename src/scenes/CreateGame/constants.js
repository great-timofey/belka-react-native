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

export const STATE_KEYS = {
  roomName: 'roomName',
  password: 'password',
  bet: 'bet',
  rank: 'rank',
  eggsX4: 'eggsX4',
  ace: 'ace',
  spas30: 'spas30',
  chat: 'chat',
  fin120: 'fin120',
}

export const initialState = {
  [STATE_KEYS.roomName]: '',
  [STATE_KEYS.password]: '',
  [STATE_KEYS.bet]: '',
  [STATE_KEYS.rank]: 1,
  [STATE_KEYS.eggsX4]: false,
  [STATE_KEYS.ace]: false,
  [STATE_KEYS.spas30]: false,
  [STATE_KEYS.chat]: false,
  [STATE_KEYS.fin120]: false,
}

export const validator = {
  [STATE_KEYS.roomName]: value => value && value.length >= 3,
  [STATE_KEYS.bet]: value => +value >= 99,
}

export const errorInitialState = {
  [STATE_KEYS.roomName]: false,
  [STATE_KEYS.bet]: false,
}
