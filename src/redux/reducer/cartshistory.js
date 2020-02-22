const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const cartshistory = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARTS_HISTORY_PENDING':
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
            }
        case 'GET_CARTS_HISTORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_CARTS_HISTORY_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        default:
            return state
    }
}

export default cartshistory