export function sortCards(cards) {
  const cardRank = ['J', 'A', '10', 'K', 'Q', '9', '8', '7']
  const cardPos = ({ face = {} }) => face.suit * 10 + cardRank.indexOf(face.value)
  return cards.sort((c1, c2) => cardPos(c1) - cardPos(c2))
}
