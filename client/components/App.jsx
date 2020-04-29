import React from 'react'
import MarsPics from './MarsPics'
import request from 'superagent'
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
      state: 'loading...',
      rover: ''
    }
  }

  loader () {
    var { sol, camera } = viewData
    request.get(apiUrl + '/' + sol + '/' + camera)
      .then(res => {
        console.log(res.body.pics)
        this.setState({
          pics: res.body.pics
        })
      })
      .then(() => {
        if (this.state.pics.length === 0) {
          this.setState({
            state: 'No images found',
            load: false
          })
        } else {
          this.setState({
            state: 'loading...',
            load: true
          })
        }
      })
  }

  componentDidMount () {
    this.loader()
  }

  handleCameraChange = event => {
    this.setState({
      camera: event.target.value
    })
  }

  handleSolChange = event => {
    this.setState({
      sol: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { sol, camera } = this.state
    viewData = {
      sol: sol,
      camera: camera
    }
    this.setState({
      load: false
    })
    this.loader()
  }

  handleRoverChange = event => {
    this.setState({
      rover: event.target.value
    })
  }


  render() {
    return (
      <>
        <form className='change-rover'>
          <label>You're viewing Curiosity</label>
    &nbsp;
    <select name='rover' value={this.state.rover} onChange={this.handleRoverChange} >
            <option value="Curiosity">Curiosity</option>
            <option value="Spirit">Spirit</option>
            <option value='Opportunity'>Opportunity</option>
          </select>
        </form>
        <form>
          <label>
            Pick a camera
    <select className='form-contents' name='camera' value={this.state.camera} onChange={this.handleCameraChange}>
              <option value='FHAZ'>Front Hazard Avoidance Camera</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera</option>
              <option value="MAST">Mast Camera</option>
              <option value="CHEMCAM">Chemistry and Camera Complex</option>
              <option value="MAHLI">Mars Hand Lens Imager</option>
              <option value="MARDI">Mars Descent Imager</option>
              <option value="NAVCAM">Navigation Camera</option>
              <option value="ALL">All cameras</option>
            </select>
          </label>
          <br></br>
          <label className='form-contents'>Sol </label><input min={0} name='sol' type='number'
            value={this.state.sol}
            onChange={this.handleSolChange}
            placeholder={0}
          />
          <br />
          <input className='form-contents' type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        {/* <MarsPics load={this.state.load} /> */}
      </>
    )
  }
}

export default App

{/*
  
        */}