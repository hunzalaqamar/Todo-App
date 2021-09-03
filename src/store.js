import {createStore, applyMiddleware} from "redux"
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;   