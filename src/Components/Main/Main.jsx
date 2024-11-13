import React from 'react'
import './main.scss'
import data from '../../constants/data'
import { IoLocationOutline } from 'react-icons/io5'
import { BiCheckboxChecked } from 'react-icons/bi'

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} loading="lazy" />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <IoLocationOutline className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}  <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BiCheckboxChecked className="icon" />
                  </button>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Main
