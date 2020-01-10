import React, { memo, useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import { START_CHANNEL } from '../../redux/belkaGame/actions'

import { InfoBoard } from '../../Components/InfoBoard'
import { GameBoard } from '../../Components/GameBoard'

import styles from './styles'

export const BelkaGame = memo(function(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    const roomId =
      props.navigation && props.navigation.getParam && props.navigation.getParam('roomId')

    if (!roomId) return

    dispatch({ type: START_CHANNEL, roomId })
  }, [dispatch, props.navigation])

  return (
    <View style={styles.container}>
      <InfoBoard />
      <GameBoard />
    </View>
  )
})
