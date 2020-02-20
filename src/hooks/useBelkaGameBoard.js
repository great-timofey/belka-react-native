import { useSelector } from 'react-redux'
import { useMemo } from 'react'

export function useBelkaGameBoard() {
  const { objects } = useSelector(state => state.belkaGame)

  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects],
  )

  return useMemo(() => boardId && objects[boardId], [objects, boardId])
}
