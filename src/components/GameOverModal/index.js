import React, { memo } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'

import { BelkaButton } from '../BelkaButton'

import styles from './styles'

export const GameOverModal = memo(function({ open, closeCallback }) {
  return (
    <Modal isVisible={open} onBackdropPress={closeCallback}>
      <View style={styles.modal}>
        <Text style={styles.modalHeader}>Вы выиграли</Text>
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
      </View>
    </Modal>
  )
})
