import React from 'react'
import './main.scss'
import data from '../../constants/data'

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return (
              <div key={id} className="singleDestination">
                { 
                <div className="imageDiv">
                  <img src={imgSrc} alt="destinationImg" />
                </div>
                }
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Main
