const initialState = ""

export default (state=initialState, action) => {
  switch(action.type){
    case "POST_PASSWORD":
      return [...state, action.payload]
    case "GET_PASSWORD_INITIATE_FULFILLED":
      return action.payload.data
    default:
      return state
  }
}
