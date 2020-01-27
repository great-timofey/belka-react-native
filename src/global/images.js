/*  eslint-disable */
const clubsTwo = require('../../assets/cards/2c.png')
const clubsThree = require('../../assets/cards/3c.png')
const clubsFour = require('../../assets/cards/4c.png')
const clubsFive = require('../../assets/cards/5c.png')
const clubsSix = require('../../assets/cards/6c.png')
const clubsSeven = require('../../assets/cards/7c.png')
const clubsEight = require('../../assets/cards/8c.png')
const clubsNine = require('../../assets/cards/9c.png')
const clubsTen = require('../../assets/cards/10c.png')
const clubsJack = require('../../assets/cards/Jc.png')
const clubsQueen = require('../../assets/cards/Qc.png')
const clubsKing = require('../../assets/cards/Kc.png')
const clubsAce = require('../../assets/cards/Ac.png')
const spadesTwo = require('../../assets/cards/2s.png')
const spadesThree = require('../../assets/cards/3s.png')
const spadesFour = require('../../assets/cards/4s.png')
const spadesFive = require('../../assets/cards/5s.png')
const spadesSix = require('../../assets/cards/6s.png')
const spadesSeven = require('../../assets/cards/7s.png')
const spadesEight = require('../../assets/cards/8s.png')
const spadesNine = require('../../assets/cards/9s.png')
const spadesTen = require('../../assets/cards/10s.png')
const spadesJack = require('../../assets/cards/Js.png')
const spadesQueen = require('../../assets/cards/Qs.png')
const spadesKing = require('../../assets/cards/Ks.png')
const spadesAce = require('../../assets/cards/As.png')
const heartsTwo = require('../../assets/cards/2h.png')
const heartsThree = require('../../assets/cards/3h.png')
const heartsFour = require('../../assets/cards/4h.png')
const heartsFive = require('../../assets/cards/5h.png')
const heartsSix = require('../../assets/cards/6h.png')
const heartsSeven = require('../../assets/cards/7h.png')
const heartsEight = require('../../assets/cards/8h.png')
const heartsNine = require('../../assets/cards/9h.png')
const heartsTen = require('../../assets/cards/10h.png')
const heartsJack = require('../../assets/cards/Jh.png')
const heartsQueen = require('../../assets/cards/Qh.png')
const heartsKing = require('../../assets/cards/Kh.png')
const heartsAce = require('../../assets/cards/Ah.png')
const diamondsTwo = require('../../assets/cards/2d.png')
const diamondsThree = require('../../assets/cards/3d.png')
const diamondsFour = require('../../assets/cards/4d.png')
const diamondsFive = require('../../assets/cards/5d.png')
const diamondsSix = require('../../assets/cards/6d.png')
const diamondsSeven = require('../../assets/cards/7d.png')
const diamondsEight = require('../../assets/cards/8d.png')
const diamondsNine = require('../../assets/cards/9d.png')
const diamondsTen = require('../../assets/cards/10d.png')
const diamondsJack = require('../../assets/cards/Jd.png')
const diamondsQueen = require('../../assets/cards/Qd.png')
const diamondsKing = require('../../assets/cards/Kd.png')
const diamondsAce = require('../../assets/cards/Ad.png')
const cover = require('../../assets/cards/cover.png')

export const gameScreenBackground = require('../../assets/images/background.png')
export const scoreContainer = require('../../assets/images/score-container.png')

/*
0 = spades
1 = clubs
2 = hearts
3 = diamonds
 */

export const cards = {
  '0': {
    '2': spadesTwo,
    '3': spadesThree,
    '4': spadesFour,
    '5': spadesFive,
    '6': spadesSix,
    '7': spadesSeven,
    '8': spadesEight,
    '9': spadesNine,
    '10': spadesTen,
    J: spadesJack,
    Q: spadesQueen,
    K: spadesKing,
    A: spadesAce
  },

  '1': {
    '2': clubsTwo,
    '3': clubsThree,
    '4': clubsFour,
    '5': clubsFive,
    '6': clubsSix,
    '7': clubsSeven,
    '8': clubsEight,
    '9': clubsNine,
    '10': clubsTen,
    J: clubsJack,
    Q: clubsQueen,
    K: clubsKing,
    A: clubsAce
  },

  '2': {
    '2': heartsTwo,
    '3': heartsThree,
    '4': heartsFour,
    '5': heartsFive,
    '6': heartsSix,
    '7': heartsSeven,
    '8': heartsEight,
    '9': heartsNine,
    '10': heartsTen,
    J: heartsJack,
    Q: heartsQueen,
    K: heartsKing,
    A: heartsAce
  },

  '3': {
    '2': diamondsTwo,
    '3': diamondsThree,
    '4': diamondsFour,
    '5': diamondsFive,
    '6': diamondsSix,
    '7': diamondsSeven,
    '8': diamondsEight,
    '9': diamondsNine,
    '10': diamondsTen,
    J: diamondsJack,
    Q: diamondsQueen,
    K: diamondsKing,
    A: diamondsAce
  },
  cover
}
