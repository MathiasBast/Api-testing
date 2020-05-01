import React from 'react'
import request from 'superagent'
import MarsPics from './MarsPics'
import Form from './Form'

const apiUrl = '/api/v1/mars'

let viewData = {
  sol: 1000,
  camera: 'FHAZ'
}

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sol: 1000,
      camera: 'FHAZ',
      load: false,
      pics: '',
      myState: 'loading...',
      rover: ''
    }
  }

  render () {
    return (
      <>
        <Form />
        <MarsPics />
      </>
    )
  }
}

export default App

{ /*

  loader (data) {
    if (data === undefined) {
      var { sol, camera } = viewData
    } else {
      var { sol, camera } = data
    }
    console.log(data)
    request.get(apiUrl + '/' + sol + '/' + camera)
      .then(res => {
        this.setState({
          pics: res.body.pics
        })
      })
      .then(() => {
        if (this.state.pics.length === 0) {
          this.setState({
            myState: 'No images found',
            load: false
          })
        } else {
          this.setState({
            myState: 'loading...',
            load: true
          })
        }
      })
  }
*/ }
