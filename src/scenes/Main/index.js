import React, { memo } from 'react'
import { View, Button } from 'react-native'

import { ROOMS } from '@navigation/names'

export const Main = memo(function({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.navigate(ROOMS)} title="to rooms" />
    </View>
  )
})
