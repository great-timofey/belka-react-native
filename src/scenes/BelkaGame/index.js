import React, { memo } from 'react'

import { InfoBoard, GameBoard, ContainerWithBackground } from '@components'

export const BelkaGame = memo(function() {
  // const dispatch = useDispatch()

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
  return (
    <ContainerWithBackground size="full">
      <InfoBoard />
      <GameBoard />
    </ContainerWithBackground>
  )
})
