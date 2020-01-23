//  import image of card

export const getSuit = suitId => ['spades', 'clubs', 'hearts', 'diams'][suitId] || ''
export const getSuitCode = suitId => ['\u2660', '\u2663', '\u2665', '\u2666'][suitId] || ''

export const suitMap = {
  spades: 0,
  clubs: 1,
  hearts: 2,
  diamonds: 3
}
