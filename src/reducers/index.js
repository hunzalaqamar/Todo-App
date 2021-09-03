import todoReducers from "./todo";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;