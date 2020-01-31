import React, { memo } from 'react'
import { View } from 'react-native'
import * as Progress from 'react-native-progress'

import { ContainerWithBackground, BelkaTypography, BelkaCard } from '@components'
import { colors } from '@global/styles'

import styles from './styles'

export const GamePreparation = memo(function() {
  return (
    <ContainerWithBackground>
      <View style={styles.container}>
        <BelkaCard additionalStyles={[styles.card]}>
          <View style={styles.textContainer}>
            <BelkaTypography bold style={[styles.text, styles.readiness]}>
              Готовность игроков
            </BelkaTypography>
            <Progress.Circle
              progress={1}
              showsText
              borderWidth={0}
              textStyle={styles.text}
              formatText={progress => `${progress}`}
              color={colors.semanticAttention}
            />
          </View>
          <View style={styles.textContainer}>
            <BelkaTypography bold style={[styles.text]}>
              Ранг комнаты: {80}
            </BelkaTypography>
            <BelkaTypography bold style={[styles.text]}>
              Общая сумма: {10000}
            </BelkaTypography>
          </View>
        </BelkaCard>
        <BelkaCard additionalStyles={[styles.card]}>
          {/* {players.map(player => <PlayerCard {...player} />)} */}
          <BelkaTypography bold style={[styles.text]}>
            hello
          </BelkaTypography>
        </BelkaCard>
      </View>
    </ContainerWithBackground>
  )
})
