import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { InfoBoard, GameBoard, ContainerWithBackground } from '@components'
import { useBackHandlerHook } from '@hooks'
import { leaveRoom } from '@redux/belkaGame/actions'

export const BelkaGame = memo(function() {
  const dispatch = useDispatch()

  // const { gameOver } = useSelector(state => state.belkaGame)
  //
  // useEffect(() => {
  //   if (!roomId) return
  //
  //   dispatch(startChannel(roomId))
  // }, [dispatch, roomId])

  // useEffect(() => {
  //   if (gameOver) {
  //     setShowGameOverModal(true)
  //   }
  // }, [gameOver])
  //
  const onLeaveRoom = useCallback(() => {
    dispatch(leaveRoom())
  }, [dispatch])
  useBackHandlerHook(onLeaveRoom)
  return (
    <ContainerWithBackground size="full">
      <InfoBoard />
      <GameBoard />
    </ContainerWithBackground>
  )
})
