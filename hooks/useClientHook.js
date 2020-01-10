import { useMemo } from 'react'
import * as Colyseus from 'colyseus.js'

export function useClientHook() {
  return useMemo(() => new Colyseus.Client('ws://belkagame.herokuapp.com'), [])
}
