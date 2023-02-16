export const setCurrentUser = (data) => {
    return{
        type: 'FETCH_CRURRENT_USER',
        payload: data
    }
}