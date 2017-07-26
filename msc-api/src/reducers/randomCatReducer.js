const initialState = {
  randomCat: ""
}

export default (state=initialState, action) => {
  switch(action.type){
    case "GET_CAT_PENDING":
      return {randomCat: "wait"}
    case "GET_CAT_FULFILLED":
      return {randomCat: action.payload.data}
      case "GET_CAT_REJECTED":
        return {randomCat: action.payload}
    default:
      return state
  }
}
