import { GET_PICS_AWAIT, GET_PICS_SUCESS } from '../actions/index'

export default function pending (pending = false, action) {
  switch (action.type) {
    case GET_PICS_AWAIT:
      return true

    case GET_PICS_SUCESS:
      return true

    default:
      return pending
  }
}