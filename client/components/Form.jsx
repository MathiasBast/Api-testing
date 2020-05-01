import React from 'react'
import { connect } from 'react-redux'
import { getPics } from '../actions'

let viewData = {
  sol: 1000,
  camera: 'FHAZ'
}

class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sol: 1000,
      camera: 'FHAZ',
      rover: 'Curiosity'
    }
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

  handleRoverChange = event => {
    this.setState({
      rover: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { sol, camera, rover } = this.state
    viewData = {
      sol: sol,
      camera: camera
    }
    this.props.dispatch(getPics(sol, camera, rover))
  }

  render () {
    return (
      <div>
        <form className='change-rover'>
          <label>Pick a Rover</label>
          &nbsp;
          <select name='rover' value={this.state.rover} onChange={this.handleRoverChange} >
            <option value="Curiosity">Curiosity</option>
            <option value="Spirit">Spirit</option>
            <option value='Opportunity'>Opportunity</option>
          </select>
        </form>
        <form>
          <div>
            <label>Pick a Camera</label>
          </div>
          &nbsp;
          <select className='form-contents' name='camera' value={this.state.camera} onChange={this.handleCameraChange}>
            {this.state.rover === 'Curiosity' && <>
              <option value='FHAZ'>Front Hazard Avoidance Camera</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera</option>
              <option value="MAST">Mast Camera</option>
              <option value="CHEMCAM">Chemistry and Camera Complex</option>
              <option value="MAHLI">Mars Hand Lens Imager</option>
              <option value="MARDI">Mars Descent Imager</option>
              <option value="NAVCAM">Navigation Camera</option>
              </>}
            {this.state.rover === 'Opportunity' && <>
              <option value='FHAZ'>Front Hazard Avoidance Camera</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera</option>
              <option value="NAVCAM">Navigation Camera</option>
              <option value="PANCAM">Panoramic Camera</option>
              <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
              </>}
            {this.state.rover === 'Spirit' && <>
              <option value='FHAZ'>Front Hazard Avoidance Camera</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera</option>
              <option value="NAVCAM">Navigation Camera</option>
              <option value="PANCAM">Panoramic Camera</option>
              <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
              </>}
            <option value="ALL">All cameras</option>
          </select>

          <br></br>
          <label className='form-contents'>Sol </label><input min={0} name='sol' type='number'
            value={this.state.sol}
            onChange={this.handleSolChange}
            placeholder={0}
          />
          <br />
          <input className='form-contents' type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default connect()(Form)
