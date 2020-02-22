const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const reviews = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_REVIEWS_PENDING':
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: true
            }
        case 'GET_REVIEWS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: true
            }
        case 'GET_REVIEWS_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true

            }
        case 'POST_REVIEWS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: true
            }
        case 'POST_REVIEWS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: true
            }
        case 'POST_REVIEWS_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case 'DELETE_REVIEWS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: true
            }
        case 'DELETE_REVIEWS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: true

            }
        case 'DELETE_REVIEWS_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        default:
            return state
    }
}

export default reviews