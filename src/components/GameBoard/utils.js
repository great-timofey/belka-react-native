export function sortPlayersDataForGameBoard({ playersList, me }) {
  if (!me || !me.id) return
  const indices = ['First', 'Second', 'Third']
  let playersSorted = playersList.sort((a, b) => +a.id[1] - +b.id[1])

  const enemiesMap = {}
  const enemiesCount = playersList.length - 1
  const myIndex = playersSorted.findIndex(player => player.id === me.id)

  if (myIndex !== 0) {
    playersSorted = [...playersSorted.slice(myIndex), ...playersSorted.slice(0, myIndex)]
  }

  for (let i = 1; i < enemiesCount + 1; i++) {
    const nextPlayer = playersSorted[i]
    enemiesMap[nextPlayer.id] = indices.shift()
  }

  const enemies = playersList.filter(player => player.id !== me.id)
  return { enemiesMap, enemies }
}
