import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigationParam } from 'react-navigation-hooks'

import { startChannel } from '@redux/belkaGame/actions'
import { InfoBoard } from '@components/InfoBoard'
import { GameBoard } from '@components/GameBoard'
import { ContainerWithBackground } from '@components/ContainerWithBackground'

export const BelkaGame = memo(function() {
  const dispatch = useDispatch()
  const roomId = useNavigationParam('roomId')
  // const { gameOver } = useSelector(state => state.belkaGame)
  // const [showGameOverModal, setShowGameOverModal] = useState(false)

  useEffect(() => {
    if (!roomId) return

    dispatch(startChannel(roomId))
  }, [dispatch, roomId])

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
