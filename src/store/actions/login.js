export function alterarLogin(userEmail) {
    return {
        type: 'USUARIO_LOGOU',
        payload: userEmail
    }
}