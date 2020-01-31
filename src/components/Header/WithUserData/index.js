import React, { memo } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { Bar } from 'react-native-progress'

import { iconLevel, userDefaultAvatar } from '@global/images'
import { colors } from '@global/styles'

import { BelkaButton } from '../../BelkaButton'

import styles from './styles'

import { Header } from '..'

export const HeaderWithUserData = memo(function() {
  return (
    <Header>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground style={styles.avatar} source={userDefaultAvatar}>
            <ImageBackground style={styles.iconLevel} source={iconLevel}>
              <Text style={styles.levelText}>8</Text>
            </ImageBackground>
          </ImageBackground>
          <View>
            <Text style={[styles.levelText, styles.nickname]}>Professional II</Text>
            <Bar
              style={styles.expBar}
              progress={0.5}
              unfilledColor="#34373f"
              borderWidth={0}
              color={colors.semanticPrimary}
              width={90}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonRight]}>
          <Text style={styles.money}>10,500 P</Text>
          <BelkaButton additionalStyles={[styles.purchaseButton]}>
            <Text style={styles.purchaseButtonText}>+</Text>
          </BelkaButton>
        </TouchableOpacity>
      </View>
    </Header>
  )
})
