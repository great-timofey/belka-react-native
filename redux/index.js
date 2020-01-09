import { persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import belkaGameReducer from './belkaGame/reducer'

const persistConfig = {
  key: 'belkaGame',
  storage: AsyncStorage
}

export const store = createStore(
  combineReducers({
    belkaGame: belkaGameReducer
  }),
  composeWithDevTools()
)

export const persistor = persistStore(store)

export default { store, persistor }
