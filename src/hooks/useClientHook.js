import { useMemo } from 'react'
import env from 'react-native-config'
import * as Colyseus from 'colyseus.js'

export function useClientHook() {
  return useMemo(() => new Colyseus.Client(`ws://${env.API_HOST}`), [])
}
