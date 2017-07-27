import { combineReducers } from 'redux'

import starWarsReducer from './starWarsReducer'
import randomCatReducer from './randomCatReducer'
import passwordReducer from "./PasswordReducer"

export default combineReducers({
  getStarWars: starWarsReducer,
  getCat: randomCatReducer,
  passwordList: passwordReducer
})
