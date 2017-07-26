const initialState = {
  starWarsSWD: ""
}

export default (state=initialState, action) => {
  switch(action.type){
    case "GET_STAR_WARS_PENDING":
      return {starWarsSWD: "wait"}
    case "GET_STAR_WARS_FULFILLED":
      return {starWarsSWD: action.payload.data}
      case "GET_STAR_WARS_REJECTED":
        return {starWarsSWD: action.payload}
    default:
      return state
  }
}
