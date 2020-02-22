const initialState = {
    msg: '',
    isLoading: false,
    isError: false,
    isSuccess: true
}

const register = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'REGISTER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                msg: action.payload.data.msg,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        default:
            return state
    }
}

export default register