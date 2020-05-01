import { GET_PICS_ERROR, CLEAR_PICS_ERROR } from '../actions/index'

export default function (error = { error: false, message: 'not run' }, action) {
  switch (action.type) {
    case GET_PICS_ERROR:
      return {
        error: true,
        message: action.err
      }

    case CLEAR_PICS_ERROR:
      return {
        error: false
      }

    default:
      return error
  }
}
