const initialState = {
  count: 0,
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_B':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT_B':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET_B':
      return {
        ...state,
        count: initialState.count,
      }
    default:
      return state
  }
}
