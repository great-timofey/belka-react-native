import React, { memo, useEffect } from 'react'
import { ImageBackground, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { startChannel } from '@redux/belkaGame/actions'

import { gameScreenBackground } from '@global/images'
import { InfoBoard } from '@components/InfoBoard'
import { GameBoard } from '@components/GameBoard'

import styles from './styles'

export const BelkaGame = memo(function(props) {
  const dispatch = useDispatch()
  // const { gameOver } = useSelector(state => state.belkaGame)
  // const [showGameOverModal, setShowGameOverModal] = useState(false)

  useEffect(() => {
    const roomId =
      props.navigation && props.navigation.getParam && props.navigation.getParam('roomId')

    if (!roomId) return

    dispatch(startChannel(roomId))
  }, [dispatch, props.navigation])

  // useEffect(() => {
  //   if (gameOver) {
  //     setShowGameOverModal(true)
  //   }
  // }, [gameOver])
  //
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={gameScreenBackground}>
        <InfoBoard />
        <GameBoard />
      </ImageBackground>
    </View>
  )
})
