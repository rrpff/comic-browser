import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import reader from './reader'

export default combineReducers({
  routing,
  reader
})
