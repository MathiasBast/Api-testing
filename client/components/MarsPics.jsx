import React from 'react'
import request from 'superagent'

const apiUrl = '/api/v1/mars'

const imgStyle = {
  width: '100%',
  height: 'auto',
  marginTop: '20px',
  marginBottom: '20px'
}

let viewData = {
  sol: 1000,
  camera: 'FHAZ'
}

class MarsPics extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sol: 1000,
      camera: 'FHAZ',
      load: false,
      pics: '',
      state: 'loading...'
    }
  }

  loader () {
    var { sol, camera } = viewData
    request.get(apiUrl + '/' + sol + '/' + camera)
      .then(res => {
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

  render () {
    return (
      <>
        <div className='div-class'>
          <h1>Mars Rover Pix</h1>
          <form>
            <label>
            Pick a camera
              <select name='camera' value={this.state.camera} onChange={this.handleCameraChange}>
                <option value='FHAZ'>Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="MAST">Mast Camera</option>
                <option value="CHEMCAM">Chemistry and Camera Complex</option>
                <option value="MAHLI">Mars Hand Lens Imager</option>
                <option value="MARDI">Mars Descent Imager</option>
                <option value="NAVCAM">Navigation Camera</option>
              </select>
            </label>
            <br></br>
            <br></br>
            <label>Sol </label><input min={0} name='sol' type='number'
              value={this.state.sol}
              onChange={this.handleSolChange}
              placeholder={0}
            />
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>

          {this.state.load
            ? <div>
              <p>Max Sol is: {this.state.pics[0].maxSol}</p>
              {this.state.pics.map(pic => {
                return (
                  <div key={pic.id} className='pics-class' >
                    <img src={pic.imgSrc} style={imgStyle} />
                    <div>Rover Name: {pic.roverName}</div>
                    <div>Sol: {pic.sol}</div>
                    <div>Earth Date: {pic.earthDate}</div>
                  </div>
                )
              })
              }
            </div>

            : <div>{this.state.state}</div>
          }
        </div>
      </>
    )
  }
}

export default MarsPics
