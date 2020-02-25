export function sortPlayersDataForGameBoard({ playersList, me }) {
  if (!me || !me.id) return
  const indices = ['First', 'Second', 'Third']

  const enemiesMap = {}
  const enemiesCount = playersList.length - 1
  const myIndex = playersList.findIndex(player => player.id === me.id)

  if (myIndex !== 0) {
    playersList = [...playersList.slice(myIndex), ...playersList.slice(0, myIndex)]
  }

  for (let i = 1; i < enemiesCount + 1; i++) {
    const nextPlayer = playersList[i]
    enemiesMap[nextPlayer.id] = indices.shift()
  }

  const enemies = playersList.filter(player => player.id !== me.id)
  return { enemiesMap, enemies }
}
