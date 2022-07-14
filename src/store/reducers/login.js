const initialState = {userLogged: null}
const initialAction = {type: null}

export default function (state = initialState, action = initialAction) {
    switch(action.type) {
        case 'USUARIO_LOGOU':
            return {
                ...state, userLogged: action.payload
            }
        default:
            return state
    }
}