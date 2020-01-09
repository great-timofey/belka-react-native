import React, { memo, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { InfoBoard } from '../Components/InfoBoard'
import { GameBoard } from '../Components/GameBoard'

export const BelkaGame = memo(function(props) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState()
  // const store = useSelector(store => store)

  useEffect(() => {
    const roomId =
      props.navigation && props.navigation.getParam && props.navigation.getParam('roomId')

    if (!roomId) return

    dispatch({ type: 'START_CHANNEL', roomId })
    setLoading(false)
  }, [dispatch, props.navigation])

  return loading ? (
    <View>
      <Text>Game is loading...</Text>
    </View>
  ) : (
    <View style={{ backgroundColor: 'green', flex: 1 }}>
      <InfoBoard />
      <GameBoard />
    </View>
  )
})
