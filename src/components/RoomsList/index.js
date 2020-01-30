import React, { memo } from 'react'
import { FlatList } from 'react-native'

import { Room } from './Room'

export const RoomsList = memo(function({ rooms, onItemPress }) {
  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => <Room {...item} onPress={onItemPress} />}
      keyExtractor={item => item.roomId}
    />
  )
})
