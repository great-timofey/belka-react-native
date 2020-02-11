import React, { memo } from 'react'
import { Text, View } from 'react-native'

import { BelkaButton } from '../BelkaButton'
import { BelkaModal } from '../BelkaModal'

import styles from './styles'

export const GameOverModal = memo(function({ open, closeCallback }) {
  return (
    <BelkaModal
      open={open}
      closeCallback={closeCallback}
      header="Вы выиграли"
      content={
        <>
          <Text style={styles.modalSubhead}>Выиграли 24000</Text>
          <Text style={styles.scoresHead}>Набрано очков</Text>
          <View style={styles.teamsList}>
            <View style={styles.teamContainer}>
              <Text style={styles.teamName}>Команда 1:</Text>
              <Text style={styles.teamMembers}>sdkf sdkfj</Text>
              <Text style={styles.teamResult}>32</Text>
            </View>
            <View style={[styles.teamContainer, styles.teamContainerLast]}>
              <Text style={styles.teamName}>Команда 2:</Text>
              <Text style={styles.teamMembers}>sdkf sdkfj</Text>
              <Text style={styles.teamResult}>3</Text>
            </View>
          </View>
          <BelkaButton primary title="Найти новую игру" onPress={closeCallback} />
        </>
      }
    />
  )
})
