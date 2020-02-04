import React, { memo } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import { iconArrowBack } from '@global/images'

import styles from './styles'

import { Header } from '..'

export const HeaderWithBackButton = memo(function({ title, backCallback }) {
  const { goBack } = useNavigation()

  return (
    <Header>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => (backCallback ? backCallback() : goBack())}
        >
          <Image style={styles.backImage} source={iconArrowBack} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Header>
  )
})
