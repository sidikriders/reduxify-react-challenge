const initialState = {
  passwordList: "",
  validatePassword: {
    class: "input",
    msg: ""
  }
}

export default (state=initialState, action) => {
  switch(action.type){
    case "GET_PASSWORD_INITIATE_FULFILLED":
      return {...state, passwordList: action.payload.data}
    case "FILTER_PASSWORD":
      return {...state, passwordList: state.passwordList.filter(x => {
        if (x.url.includes(action.payload)) {
          return x
        } else {
          return null
        }
      })}
    case "VALIDATE_PASSWORD":
      return {...state, validatePassword: action.payload}
    case "EDIT_PASSWORD_INITIATE":
      return {...state, passwordToEdit: action.payload}
    default:
      return state
  }
}
