import React, { useEffect, useRef } from 'react'

import RootNavigator from './config'
import * as NavigationService from './navigationService'

export const AppNavigator = () => {
  let ref = useRef(null)

  useEffect(() => {
    NavigationService.setNavigator(ref)
  }, [ref])

  return <RootNavigator ref={node => (ref = node)} />
}
