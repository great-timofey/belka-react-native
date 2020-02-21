import React, { memo } from 'react'
import { Switch } from 'react-native'

export const BelkaSwitch = memo(function({ onChange, value, style = [] }) {
  return <Switch onValueChange={onChange} value={value} style={[...style]} />
})
