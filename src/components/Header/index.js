import React, { memo } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { Bar } from 'react-native-progress'

import { BelkaButton } from '@components/BelkaButton'
import { headerBackground, levelIcon, userDefaultAvatar } from '@global/images'
import { colors } from '@global/styles'

import styles from './styles'

export const Header = memo(function() {
  return (
    <ImageBackground style={styles.container} source={headerBackground}>
      <TouchableOpacity style={styles.button}>
        <ImageBackground style={styles.avatar} source={userDefaultAvatar}>
          <ImageBackground style={styles.levelIcon} source={levelIcon}>
            <Text style={styles.levelText}>8</Text>
          </ImageBackground>
        </ImageBackground>
        <View>
          <Text style={[styles.levelText, styles.nickname]}>Professional II</Text>
          <Bar style={styles.expBar} progress={0.5} color={colors.semanticPrimary} width={90} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonRight]}>
        <Text style={styles.money}>10,500 P</Text>
        <BelkaButton title="+" additionalStyles={[styles.purchaseButton]} />
      </TouchableOpacity>
    </ImageBackground>
  )
})
