import { useMemo } from 'react'
// import env from 'react-native-config'
import { Client } from 'colyseus.js'

export function useColyseusClient() {
  return useMemo(() => new Client(`wss://game11.herokuapp.com`), [])
}
