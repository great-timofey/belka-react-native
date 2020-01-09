import React, { memo, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { START_CHANNEL } from '../redux/belkaGame/actions'

import { InfoBoard } from '../Components/InfoBoard'
import { GameBoard } from '../Components/GameBoard'

export const BelkaGame = memo(function(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    const roomId =
      props.navigation && props.navigation.getParam && props.navigation.getParam('roomId')

    if (!roomId) return

    dispatch({ type: START_CHANNEL, roomId })
  }, [dispatch, props.navigation])

  return (
    <View style={{ backgroundColor: 'green', flex: 1 }}>
      <InfoBoard />
      <GameBoard />
    </View>
  )
})
