import React, { memo, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigationParam } from 'react-navigation-hooks'

import { startChannel } from '@redux/belkaGame/actions'
import { InfoBoard, GameBoard, ContainerWithBackground } from '@components'

export const BelkaGame = memo(function() {
  const dispatch = useDispatch()
  const { clients } = useSelector(state => state.belkaGame)
  const clientList = useMemo(() => (clients && Object.keys(clients)) || [], [clients])

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
      {clientList.length === 4 && <GameBoard />}
    </ContainerWithBackground>
  )
})
