// import React, { memo, useCallback, useEffect } from 'react'
import React, { memo, useCallback } from 'react'
import { AsyncStorage, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { useDispatch } from 'react-redux'

// import { CHAT, RATINGS, ROOMS } from '@navigation/names'
import { ROOMS } from '@navigation/names'
import { ContainerWithBackground, BelkaButton } from '@components'
import { cardsMainBackground } from '@global/images'
import { logout } from '@redux/auth/actions'

import styles from './styles'

export const Main = memo(function() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  // useEffect(() => {
  // dispatch(signIn('tim@mail.com', 'timmy123'))
  // dispatch(signUp('tim@mail.com', 'pass', 'timmy123'))
  // }, [dispatch])

  const handleClearToken = useCallback(async () => {
    await AsyncStorage.removeItem('token')
    console.log('token removed')
  }, [])

  const handleLogout = useCallback(async () => {
    dispatch(logout())
  }, [dispatch])

  return (
    <ContainerWithBackground>
      <Image style={styles.cardsBackground} source={cardsMainBackground} />
      <TouchableOpacity
        // onPress={() => navigate(RATINGS)}
        onPress={handleClearToken}
        style={[styles.pressable, styles.pressableLeft]}
      />
      <TouchableOpacity
        // onPress={() => navigate(CHAT)}
        onPress={handleLogout}
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
