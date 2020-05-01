import { GET_PICS_SUCCESS } from '../actions/index'

export default function picsReducer (state = [], action) {
  switch (action.type) {
    case GET_PICS_SUCCESS:
      return action.pics

    default:
      return state
  }
}
