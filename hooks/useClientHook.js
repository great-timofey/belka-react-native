import { useMemo } from 'react'
import * as Colyseus from 'colyseus.js'

export function useClientHook() {
  const client = useMemo(() => new Colyseus.Client('ws://belkagame.herokuapp.com'), [])

  return client
}
