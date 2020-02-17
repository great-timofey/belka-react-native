import { useMemo } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export function useSessionId() {
  return useMemo(async () => {
    const id = await AsyncStorage.getItem('sessionId')
    return id
    // return 'ziJ60Q-zB'
  }, [])
}
