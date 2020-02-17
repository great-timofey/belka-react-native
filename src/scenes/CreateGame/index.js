import React, { memo, useCallback, useState } from 'react'
import { Text, Slider, View, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'

import { ContainerWithBackground, BelkaInput, BelkaToggler, BelkaButton } from '@components'
import { iconLockOff } from '@global/images'
import { colors } from '@global/styles'
import { createRoom } from '@redux/belkaGame/actions'
import { useCustomStateHook } from '@hooks'

import { NEW_GAME_DATA_ENTRIES, NEW_GAME_ICONS } from './constants'
import styles from './styles'

const initialState = {
  eggsX4: false,
  ace: false,
  spas30: false,
  chat: false,
  fin120: false,
}

export const CreateGame = memo(function() {
  const [password, setPassword] = useState(null)
  const [bet, setBet] = useState(null)
  const [playersLevel, setPlayersLevel] = useState(1)
  const [state, dispatch] = useCustomStateHook(initialState)

  const reduxDispatch = useDispatch()

  const handleCreateRoom = useCallback(() => {
    reduxDispatch(
      createRoom({
        bet: +bet,
        name: 'test',
        password: null,
        eggsX4: state.eggsX4,
        dropAce: state.ace,
        spas30: state.spas30,
        fin120: state.fin120,
      }),
    )
  }, [state, reduxDispatch, bet])

  //  TODO: add name input
  return (
    <ContainerWithBackground additionalStyles={[styles.wrapper]}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        <BelkaInput
          containerAdditionalStyles={[styles.input]}
          onChangeText={setPassword}
          placeholder="Введите пароль для игры"
          value={password}
          endIcon={iconLockOff}
          inputAdditionalProps={{
            autoCompleteType: 'off',
          }}
        />
        <BelkaInput
          containerAdditionalStyles={[styles.input]}
          onChangeText={setBet}
          placeholder="Сумма ставки"
          value={bet}
          inputAdditionalProps={{
            placeholderTextColor: colors.semanticNegative,
          }}
        />
        <Text style={styles.playersLevel}>Уровень игроков: {playersLevel}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          initialValue={playersLevel}
          maximumValue={100}
          step={1}
          onValueChange={setPlayersLevel}
          minimumTrackTintColor="#25272d"
          maximumTrackTintColor="#25272d"
          thumbTintColor={colors.semanticPrimary}
        />
        <View style={styles.items}>
          {NEW_GAME_DATA_ENTRIES.map(([key, text]) => (
            <BelkaToggler
              key={key}
              text={text}
              trulyKey={state[key]}
              onPressLeft={() => dispatch({ [key]: false })}
              onPressRight={() => dispatch({ [key]: true })}
              rightIconActive={NEW_GAME_ICONS[key].true.white}
              rightIconInactive={NEW_GAME_ICONS[key].true.gold}
              leftIconActive={NEW_GAME_ICONS[key].false.white}
              leftIconInactive={NEW_GAME_ICONS[key].false.gold}
            />
          ))}
        </View>

        <BelkaButton
          additionalStyles={[styles.createGame]}
          title="Создать игру"
          onPress={handleCreateRoom}
        />
      </ScrollView>
    </ContainerWithBackground>
  )
})
