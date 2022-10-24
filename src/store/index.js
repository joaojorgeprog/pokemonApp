import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import apiSaga from './sagas'
import * as Sentry from '@sentry/react'



const rootPersistConfig = {
    key: 'dfoot',
    storage: storage,
    blacklist: [
      'AllPokemonsReducer'
    ]
  }
  
  const sentryReduxEnhancer = Sentry.createReduxEnhancer({
    // Optionally pass options
  })
  const initialiseSagaMiddleware = createSagaMiddleware()
  
  const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  export const store = createStore(
    persistReducer(rootPersistConfig, rootReducer),
    storeEnhancers(
      compose(
        applyMiddleware(
          initialiseSagaMiddleware
        ), sentryReduxEnhancer
      )
    ))
  
  export const persistor = persistStore(store)
  
  initialiseSagaMiddleware.run(apiSaga)