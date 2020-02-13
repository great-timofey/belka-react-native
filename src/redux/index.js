import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import belkaGameReducer from './belkaGame/reducer'
import belkaGameSaga from './belkaGame/saga'
import commonReducer from './common/reducer'
import authSaga from './auth/saga'
import authReducer from './auth/reducer'

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = createStore(
  combineReducers({
    belkaGame: belkaGameReducer,
    common: commonReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store)

export function configureStore() {
  sagaMiddleware.run(belkaGameSaga)
  sagaMiddleware.run(authSaga)
  return { store, persistor }
}
