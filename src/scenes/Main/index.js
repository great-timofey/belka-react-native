import React, { memo, useEffect } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { useDispatch } from 'react-redux'

import { CHAT, RATINGS, ROOMS } from '@navigation/names'
import { ContainerWithBackground, BelkaButton } from '@components'
import { cardsMainBackground } from '@global/images'
import { signIn } from '@redux/auth/actions'

import styles from './styles'

export const Main = memo(function() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(signIn('tim@mail.com', 'timmy123'))
    // dispatch(signUp('tim@mail.com', 'pass', 'timmy123'))
  }, [dispatch])

  return (
    <ContainerWithBackground>
      <Image style={styles.cardsBackground} source={cardsMainBackground} />
      <TouchableOpacity
        onPress={() => navigate(RATINGS)}
        style={[styles.pressable, styles.pressableLeft]}
      />
      <TouchableOpacity
        onPress={() => navigate(CHAT)}
        style={[styles.pressable, styles.pressableRight]}
      />
      <BelkaButton
        additionalStyles={[styles.startGameButton]}
        onPress={() => navigate(ROOMS)}
        title="Начать игру"
      />
    </ContainerWithBackground>
  )
})
