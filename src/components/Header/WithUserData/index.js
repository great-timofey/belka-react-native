import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Bar } from 'react-native-progress'
import { useSelector } from 'react-redux'

import { colors } from '@global/styles'

import { BelkaButton } from '../../BelkaButton'
import { Avatar } from '../../Avatar'

import styles from './styles'

import { Header } from '..'

export const HeaderWithUserData = memo(function() {
  const { name } = useSelector(state => state.auth)

  return (
    <Header>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Avatar level />
          <View>
            <Text style={[styles.levelText, styles.nickname]}>{name || 'Professional II'}</Text>
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
