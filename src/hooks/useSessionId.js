import { useSelector } from 'react-redux'

export function useSessionId() {
  const { room } = useSelector(state => state.belkaGame)
  return room && room.sessionId
}
