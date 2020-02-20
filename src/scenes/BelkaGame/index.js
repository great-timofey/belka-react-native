import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { InfoBoard, GameBoard, ContainerWithBackground } from '@components'
import { useBackHandler } from '@hooks'
import { leaveRoom } from '@redux/belkaGame/actions'

export const BelkaGame = memo(function() {
  const dispatch = useDispatch()

  const onLeaveRoom = useCallback(() => {
    dispatch(leaveRoom())
  }, [dispatch])

  useBackHandler(onLeaveRoom)

  return (
    <ContainerWithBackground size="full">
      <InfoBoard />
      <GameBoard />
    </ContainerWithBackground>
  )
})
