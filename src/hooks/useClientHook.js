import { useMemo } from 'react'
import env from 'react-native-config'
import { Client } from 'colyseus.js'

export function useClientHook() {
  return useMemo(() => new Client(`${env.API_WEBSOCKET_PROTOCOL}://${env.API_HOST}`), [])
}
