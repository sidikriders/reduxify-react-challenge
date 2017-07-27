const initialState = ""

export default (state=initialState, action) => {
  switch(action.type){
    case "VALIDATE_PASSWORD":
      return action.payload
    default:
      return state
  }
}
