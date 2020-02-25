import React, { memo, useCallback, useEffect, useMemo } from 'react'
import { View } from 'react-native'
import { Circle } from 'react-native-progress'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'react-navigation-hooks'

import { colors } from '@global/styles'
import {
  ContainerWithBackground,
  BelkaTypography,
  BelkaCard,
  PlayerPreparation,
  BelkaButton,
} from '@components'
import { leaveRoom } from '@redux/belkaGame/actions'
import { BELKA } from '@navigation/names'
import { useBackHandler } from '@hooks'
import { BOARD_SCENE_NAMES } from '@global/constants'

import styles from './styles'

export const GamePreparation = memo(function() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const { objects, clients } = useSelector(state => state.belkaGame)
  const { bet } = useSelector(state => state.common)

  const boardId = useMemo(
    () => Object.keys(objects).find(key => objects[key].type === 'BelkaBoard'),
    [objects],
  )

  const timer = useMemo(
    () => boardId && objects[boardId].timerId && objects[objects[boardId].timerId],
    [objects, boardId],
  )

  const handleLeaveRoom = useCallback(() => {
    dispatch(leaveRoom())
  }, [dispatch])

  const roomRank = useMemo(
    () =>
      clients &&
      Object.values(clients).reduce((acc, client) => acc + ((client && client.rank) || 0), 0),
    [clients],
  )

  useBackHandler(handleLeaveRoom)

  const boardScene = useMemo(() => boardId && objects[boardId].scene && objects[boardId].scene, [
    objects,
    boardId,
  ])

  useEffect(() => {
    if (boardScene && boardScene === BOARD_SCENE_NAMES.GAME_IN_PROGRESS)
      navigate(BELKA, { tabBarVisible: false })
  }, [navigate, boardScene])

  return (
    <ContainerWithBackground>
      <View style={styles.container}>
        <BelkaCard additionalStyles={[styles.card]}>
          <View style={styles.textContainer}>
            <BelkaTypography bold style={[styles.text, styles.readiness]}>
              Готовность игроков
            </BelkaTypography>
            <Circle
              formatText={progress => `${Math.round(progress * 10)}`}
              progress={timer && timer.value && timer.value * 0.1}
              showsText
              borderWidth={0}
              textStyle={styles.text}
              color={colors.semanticAttention}
            />
          </View>
          <View style={styles.textContainer}>
            <BelkaTypography bold style={[styles.text]}>
              Ранг комнаты: {roomRank || 0}
            </BelkaTypography>
            <BelkaTypography bold style={[styles.text]}>
              Общая сумма: {bet ? bet * 4 : 0}
            </BelkaTypography>
          </View>
        </BelkaCard>
        <BelkaCard additionalStyles={[styles.card, styles.cardPlayers]}>
          {clients &&
            Object.values(clients).map(player => (
              <PlayerPreparation
                key={player.objectId}
                name={player.name}
                ready={player.connected}
              />
            ))}
        </BelkaCard>
        <BelkaButton
          title="Выход"
          additionalStyles={[styles.buttonExit]}
          onPress={handleLeaveRoom}
        />
      </View>
    </ContainerWithBackground>
  )
})
