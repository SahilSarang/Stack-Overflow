const currentUsereReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_CRURRENT_USER':
            return action.payload;
        default:
            return state;
    }
}

export default currentUsereReducer