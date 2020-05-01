import { GET_PICS_ERROR } from '../actions/index'

export default function (error = false, action) {
  switch (action.type){
    case GET_PICS_ERROR:
      return {
        error: true,
        message: action.error
      }

    default:
      return error
  }
}
