import React, { memo, useState, useCallback, useRef } from 'react'
import { Text, Slider, View, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'

import { ContainerWithBackground, BelkaInput, BelkaToggler, BelkaButton } from '@components'
import { iconLockOff } from '@global/images'
import { colors, isAndroid } from '@global/styles'
import { createRoom } from '@redux/belkaGame/actions'
import { useCustomState } from '@hooks'

import {
  NEW_GAME_DATA_ENTRIES,
  NEW_GAME_ICONS,
  errorInitialState,
  initialState,
  validator,
} from './constants'
import styles from './styles'

export const CreateGame = memo(function() {
  const [state, dispatch] = useCustomState(initialState)
  const [errorState, errorDispatch] = useCustomState(errorInitialState)
  const [loading, setLoading] = useState(false)

  const containerRef = useRef(null)
  const reduxDispatch = useDispatch()

  const validate = useCallback(
    () =>
      Object.keys(validator).reduce((newErrorState, validatorKey) => {
        newErrorState[validatorKey] = !validator[validatorKey](state[validatorKey])
        return newErrorState
      }, {}),
    [state],
  )

  const handleCreateRoom = useCallback(() => {
    const newErrorState = validate()
    setLoading(true)

    if (!Object.values(newErrorState).find(error => error)) {
      errorDispatch(errorInitialState)
      reduxDispatch(
        createRoom({
          bet: +state.bet,
          rank: state.rank,
          name: state.roomName,
          password: state.password,
          eggsX4: state.eggsX4,
          dropAce: state.ace,
          spas30: state.spas30,
          fin120: state.fin120,
        }),
      )
    } else {
      if (containerRef && containerRef.current) {
        containerRef.current.scrollTo({ y: 0 })
      }
      errorDispatch(newErrorState)
      setLoading(false)
    }
  }, [reduxDispatch, errorDispatch, containerRef, state, validate])

  return (
    <ContainerWithBackground additionalStyles={[styles.wrapper]}>
      <ScrollView
        ref={containerRef}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <BelkaInput
          containerAdditionalStyles={[styles.input]}
          onChangeText={value => dispatch({ roomName: value })}
          placeholder="Название игры"
          value={state.roomName}
          error={errorState.roomName}
          errorText="Минимальное количество символов: 3"
          inputAdditionalProps={{
            autoCompleteType: 'off',
          }}
        />
        <BelkaInput
          containerAdditionalStyles={[styles.input]}
          onChangeText={value => dispatch({ password: value })}
          placeholder="Введите пароль для игры"
          value={state.password}
          endIcon={iconLockOff}
          inputAdditionalProps={{
            autoCompleteType: 'off',
            secureTextEntry: true,
          }}
        />
        <BelkaInput
          containerAdditionalStyles={[styles.input]}
          onChangeText={value => dispatch({ bet: value })}
          placeholder="Сумма ставки"
          value={state.bet}
          error={errorState.bet}
          errorText="Минимальная сумма: 99 тенге"
          inputAdditionalProps={{
            autoCompleteType: 'off',
            keyboardType: 'number-pad',
          }}
        />
        <Text style={styles.playersLevel}>Уровень игроков: {state.rank}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          initialValue={state.rank}
          onValueChange={value => dispatch({ rank: Math.round(value) })}
          {...(isAndroid && { step: 1 })}
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
          loading={loading}
        />
      </ScrollView>
    </ContainerWithBackground>
  )
})
