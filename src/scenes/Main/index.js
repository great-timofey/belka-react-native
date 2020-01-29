import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { CHAT, RATINGS, ROOMS } from '@navigation/names'
import { ContainerWithBackground } from '@components/ContainerWithBackground'
import { cardsMainBackground } from '@global/images'
import { BelkaButton } from '@components/BelkaButton'

import styles from './styles'

export const Main = memo(function({ navigation }) {
  return (
    <ContainerWithBackground>
      <Image style={styles.cardsBackground} source={cardsMainBackground} />
      <TouchableOpacity
        onPress={() => navigation.navigate(RATINGS)}
        style={[styles.pressable, styles.pressableLeft]}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(CHAT)}
        style={[styles.pressable, styles.pressableRight]}
      />
      <BelkaButton
        additionalStyles={[styles.startGameButton]}
        onPress={() => navigation.navigate(ROOMS)}
        title="Начать игру"
      />
    </ContainerWithBackground>
  )
})

Main.navigationOptions = () => ({
  title: 'main main main'
})
