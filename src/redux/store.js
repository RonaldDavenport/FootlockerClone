import {createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import { addShoeData } from './actions/shoppingCart-action'
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewares = [logger]
export const store = createStore(rootReducer, applyMiddleware(logger));
// store.dispatch(addShoeData)
export const persistor = persistStore(store)

export default {store,persistor};

