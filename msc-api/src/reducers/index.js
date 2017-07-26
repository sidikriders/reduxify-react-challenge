import { combineReducers } from 'redux'

import starWarsReducer from './starWarsReducer'
import randomCatReducer from './randomCatReducer'

export default combineReducers({
  getStarWars: starWarsReducer,
  getCat: randomCatReducer
})
