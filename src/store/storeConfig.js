import { createStore, combineReducers } from 'redux'
import logou from '../store/reducers/login'

// const initialState = {user: null}

const reducers = combineReducers({
    user: logou
})

function storeConfig () {
    return createStore(reducers)
}

export default storeConfig