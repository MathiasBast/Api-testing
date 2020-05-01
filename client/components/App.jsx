import React from 'react'
import request from 'superagent'

const apiUrl = '/api/v1/mars'
import MarsPics from './MarsPics'
import Form from './Form'

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

  loader (data) {
    if(data === undefined){
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

  componentDidMount () {
    this.loader()
  }

  setLoadFalse = event => {
    this.setState({
      load: false
    })
  }

  render() {
    return (
      <>
        {console.log(this.state.pics)}
        <Form load={this.state.load} myState={this.state.myState} setLoadFalse={(setLoadFalse) => this.setLoadFalse} loader={() => this.loader()} />
        <MarsPics load={this.state.load} myState={this.state.myState} pics={this.state.pics} />
      </>
    )
  }
}

export default App

{/*
  sol: 1000,
      camera: 'FHAZ',
      load: false,
      pics: '',
      state: 'loading...',
      rover: ''
        */}