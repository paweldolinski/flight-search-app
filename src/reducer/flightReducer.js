const initState = {}

const flightReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
}

export default flightReducer;