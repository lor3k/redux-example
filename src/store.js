import { createStore, combineReducers, compose } from 'redux'
import changeReducer from './state/change'

const reducer = combineReducers({
    change: changeReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store