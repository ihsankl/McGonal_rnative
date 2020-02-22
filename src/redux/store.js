import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducer'
import promiseMiddleware from 'redux-promise-middleware'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const logger = createLogger({})

export default () => {
    const store = createStore(
        persistedReducer,
        applyMiddleware(
            logger,
            promiseMiddleware
        )
    )
    const persistor = persistStore(store)
    return { store, persistor }
}