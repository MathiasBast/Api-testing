import { combineReducers } from 'redux'

import pics from './pics'
import errors from './errors'
import pending from './pending'

export default combineReducers({
  pics,
  errors,
  pending
})
