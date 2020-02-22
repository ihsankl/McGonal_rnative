const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'GET_ITEMS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case 'GET_ITEMS_FULFILLED':
      return {
        count: action.payload.data.data.length,
        data: action.payload.data,
        isLoading: false,
        isError: false
      }
    case 'GET_NEXT_ITEMS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'GET_NEXT_ITEMS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case 'GET_NEXT_ITEMS_FULFILLED':
      return {
        data: action.payload.data,
        isLoading: false,
        isError: false
      }

    default:
      return state
  }
}

export default items 