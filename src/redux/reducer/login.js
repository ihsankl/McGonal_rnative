const initialState = {
    token: '',
    isLoading: false,
    isError: false,
    isSuccess: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TOKEN_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_TOKEN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_TOKEN_FULFILLED':
            if (action.payload.data.success) {
                return {
                    token: action.payload.data.token,
                    isLoading: false,
                    isError: true,
                    isSuccess: true
                }
            }
            return {
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'REMOVE_TOKEN_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'REMOVE_TOKEN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'REMOVE_TOKEN_FULFILLED':
            return {
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        default:
            return state
    }
}

export default login 