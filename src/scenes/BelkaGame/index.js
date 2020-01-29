import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { startChannel } from '@redux/belkaGame/actions'
import { InfoBoard } from '@components/InfoBoard'
import { GameBoard } from '@components/GameBoard'
import { ContainerWithBackground } from '@components/ContainerWithBackground'

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
    <ContainerWithBackground size="full">
      <InfoBoard />
      <GameBoard />
    </ContainerWithBackground>
  )
})
