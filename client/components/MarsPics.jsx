import React from 'react'



const imgStyle = {
  width: '100%',
  height: 'auto',
  marginTop: '20px',
  marginBottom: '20px'
}



class MarsPics extends React.Component {

  render () {
    return (
      <>
        <div className='div-class'>
          <h1>Mars Rover Pix</h1>
          {console.log('pics', this.props.pics)}
          {this.props.load
            ? <div>
              <p>Max Sol is: {this.props.pics[0].maxSol}</p>
              {this.props.pics.map(pic => {
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

            : <div>{this.props.myState}</div>
          }
        </div>
      </>
    )
  }
}

export default MarsPics
