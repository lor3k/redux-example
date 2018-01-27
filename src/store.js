import { createStore, combineReducers } from 'redux'
import changeReducer from './state/change'

const reducer = combineReducers({
    change: changeReducer
})

const store = createStore(
    reducer
)

export default store