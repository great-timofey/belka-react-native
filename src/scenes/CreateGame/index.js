import React, { memo, useReducer, useState } from 'react'
import { Text, Slider, View, ScrollView } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import { ContainerWithBackground, BelkaInput, BelkaToggler, BelkaButton } from '@components'
import { iconLockOff } from '@global/images'
import { colors } from '@global/styles'
import { PREPARATION } from '@navigation/names'

import { NEW_GAME_DATA_ENTRIES, NEW_GAME_ICONS } from './constants'
import styles from './styles'

const initialState = {
  eggsX4: false,
  ace: false,
  spas30: false,
  chat: false,
  fin120: false
}

export const CreateGame = memo(function() {
  const { navigate } = useNavigation()
  const [password, setPassword] = useState(null)
  const [bet, setBet] = useState(null)
  const [playersLevel, setPlayersLevel] = useState(1)
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), initialState)

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
            autoCompleteType: 'off'
          }}
        />
        <BelkaInput
          containerAdditionalStyles={[styles.input]}
          onChangeText={setBet}
          placeholder="Сумма ставки"
          value={bet}
          inputAdditionalProps={{
            placeholderTextColor: colors.semanticNegative
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
          onPress={() => navigate(PREPARATION)}
        />
      </ScrollView>
    </ContainerWithBackground>
  )
})
