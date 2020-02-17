import React, { memo, useCallback, useEffect, useMemo } from 'react'
import { View } from 'react-native'
import * as Progress from 'react-native-progress'
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
import { useBackHandlerHook } from '@hooks'

import styles from './styles'

export const GamePreparation = memo(function() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const { objects, clients } = useSelector(state => state.belkaGame)
  const clientList = useMemo(() => (clients && Object.keys(clients)) || [], [clients])

  const players = useMemo(
    () => Object.values(objects).filter(gameObject => gameObject.type === 'BelkaPlayer'),
    [objects],
  )

  const handleLeaveRoom = useCallback(() => {
    dispatch(leaveRoom())
  }, [dispatch])

  useBackHandlerHook(handleLeaveRoom)

  //  TODO: add timer on game preparation
  useEffect(() => {
    if (clientList.length === 4) navigate(BELKA, { tabBarVisible: false })
  }, [navigate, clientList])

  return (
    <ContainerWithBackground>
      <View style={styles.container}>
        <BelkaCard additionalStyles={[styles.card]}>
          <View style={styles.textContainer}>
            <BelkaTypography bold style={[styles.text, styles.readiness]}>
              Готовность игроков
            </BelkaTypography>
            <Progress.Circle
              progress={1}
              showsText
              borderWidth={0}
              textStyle={styles.text}
              formatText={progress => `${progress}`}
              color={colors.semanticAttention}
            />
          </View>
          <View style={styles.textContainer}>
            <BelkaTypography bold style={[styles.text]}>
              Ранг комнаты: {80}
            </BelkaTypography>
            <BelkaTypography bold style={[styles.text]}>
              Общая сумма: {10000}
            </BelkaTypography>
          </View>
        </BelkaCard>
        <BelkaCard additionalStyles={[styles.card, styles.cardPlayers]}>
          {players.map(player => (
            <PlayerPreparation key={player.id} name={player.name} ready />
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
