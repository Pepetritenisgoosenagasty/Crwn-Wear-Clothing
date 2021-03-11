import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers/root'
import { persistStore } from 'redux-persist'

const middlewares = [logger]
export const store = createStore(rootReducer, applyMiddleware(...middlewares)+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store);
export default { store, persistor }