import { persistStore } from 'redux-persist'
// import AsyncStorage from '@react-native-community/async-storage'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import belkaGameReducer from './belkaGame/reducer'
import belkaGameSaga from './belkaGame/saga'
import commonReducer from './common/reducer'
import authSaga from './auth/saga'

// const persistConfig = {
//   key: 'belkaGame',
//   storage: AsyncStorage
// }

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = createStore(
  combineReducers({
    belkaGame: belkaGameReducer,
    common: commonReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store)

export function configureStore() {
  sagaMiddleware.run(belkaGameSaga)
  sagaMiddleware.run(authSaga)
  return { store, persistor }
}
