const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_CATEGORIES_FULFILLED':
            return {
                count: action.payload.data.data.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        default:
            return state
    }
}

export default categories 