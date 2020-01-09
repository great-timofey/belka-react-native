/*  eslint-disable no-param-reassign */
import { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { useDispatch } from 'react-redux'
import * as ACTIONS from '../redux/belkaGame/actions'

export function useRoomHook(client, room) {
  return room
}
