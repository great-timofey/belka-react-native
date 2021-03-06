import { BackHandler } from 'react-native'
import { useEffect } from 'react'

import { isIOS } from '@global/styles'

export function useBackHandler(action) {
  useEffect(() => {
    if (isIOS) return

    const listener = BackHandler.addEventListener('hardwareBackPress', () => {
      action()
    })

    return () => {
      listener.remove()
    }
  }, [action])
}
