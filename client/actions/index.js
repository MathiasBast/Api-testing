import request from 'superagent'

export const GET_PICS_SUCCESS = 'GET_PICS_SUCCESS'
export const GET_PICS_AWAIT = 'GET_PICS_AWAIT'
export const GET_PICS_ERROR = 'GET_PICS_ERROR'
export const CLEAR_PICS_ERROR = 'CLEAR_PICS_ERROR'
export const apiUrl = 'http://localhost:3000/api/v1/mars'

export function picsAwait () {
  return {
    type: GET_PICS_AWAIT
  }
}

export function picsSuccess (pics) {
  return {
    type: GET_PICS_SUCCESS,
    pics
  }
}

export function error (err) {
  return {
    type: GET_PICS_ERROR,
    err
  }
}

export function clearError () {
  return {
    type: CLEAR_PICS_ERROR
  }
}

export function getPics (sol, camera, rover) {
  return (dispatch) => {
    dispatch(clearError())
    dispatch(picsAwait())

    return request.get(apiUrl + '/' + sol + '/' + camera + '/' + rover)
      .then(res => {
        console.log(res.body)
        if (res.body.pics.length === 0) {
          dispatch(error('No Pictures Found'))
        } else {
          dispatch(picsSuccess(res.body))
        }
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}


// request.get(apiUrl + '/' + sol + '/' + camera)
// .then(res => {
//   this.setState({
//     pics: res.body.pics
//   })
// })
// .then(() => {
//   if (this.state.pics.length === 0) {
//     this.setState({
//       myState: 'No images found',
//       load: false
//     })
//   } else {
//     this.setState({
//       myState: 'loading...',
//       load: true
//     })
//   }
// })