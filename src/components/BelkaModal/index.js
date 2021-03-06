import React, { memo } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'

import styles from './styles'

export const BelkaModal = memo(function({ open, closeCallback, header, content, headerNegative }) {
  return (
    <Modal isVisible={open} onBackdropPress={closeCallback}>
      <View style={styles.modal}>
        {header && (
          <Text style={[styles.modalHeader, headerNegative && styles.modalHeaderNegative]}>
            {header}
          </Text>
        )}
        {content}
      </View>
    </Modal>
  )
})
