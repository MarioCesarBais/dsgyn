import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    user: function(state, action) {
        switch(action.type) {
            case 'USUARIO_LOGOU':
                return {
                    ...state, userLogged: action.payload
                }
            default:
                return {userLogged: null}
        }
    }        
})

function storeConfig () {
    return createStore(reducers)
}

export default storeConfig