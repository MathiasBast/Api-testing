import { GET_PICS_AWAIT, GET_PICS_SUCCESS } from '../actions/index'

export default function pending (pending = true, action) {
  switch (action.type) {
    case GET_PICS_AWAIT:
      return true

    case GET_PICS_SUCCESS:
      return false

    default:
      return pending
  }
}