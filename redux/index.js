import { persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import belkaGameReducer from './belkaGame/reducer'
import startStopChannel from './belkaGame/saga'

const persistConfig = {
  key: 'belkaGame',
  storage: AsyncStorage
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = createStore(
  combineReducers({
    belkaGame: belkaGameReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)

export function configureStore() {
  sagaMiddleware.run(startStopChannel)
  return { store, persistor }
}
