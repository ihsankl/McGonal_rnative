const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const carts = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARTS_PENDING':
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
            }
        case 'GET_CARTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_CARTS_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        case 'POST_CARTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'POST_CARTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'POST_CARTS_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        case 'PUT_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false
            }
        case 'PUT_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true
            }
        case 'PUT_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false
            }
        case 'DELETE_CARTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'DELETE_CARTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'DELETE_CARTS_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        default:
            return state
    }
}

export default carts