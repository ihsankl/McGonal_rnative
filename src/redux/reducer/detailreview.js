const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const detailreview = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL_REVIEW_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_DETAIL_REVIEW_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_DETAIL_REVIEW_FULFILLED':
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

export default detailreview