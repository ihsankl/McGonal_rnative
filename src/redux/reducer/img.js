const initialState = {
    img: '../Resource/images/product6609-3-large.jpg',
    isLoading: false,
    isError: false,
    isSuccess: true
}

const img = (state = initialState, action) => {
    switch (action.type) {
        case 'IMG':
            return{
                ...state
            }

        default:
            return state
    }
}

export default img 