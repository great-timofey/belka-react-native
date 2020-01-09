import React, { memo } from 'react'
import { Text, View } from 'react-native'

export const Room = memo(function() {
  return (
    <View style={{ backgroundColor: 'green', flex: 1 }}>
      <Text>hello</Text>
    </View>
  )
})
