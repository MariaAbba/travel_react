import React from 'react'
import './home.scss'
import video from '../../assets/video.mp4'
import { CiLocationOn } from 'react-icons/ci'
import { FaFilter } from 'react-icons/fa6'

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>

          <h1 className="homeTitle">Search Your Holiday</h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <CiLocationOn className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
              <input type="date" id="city" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" id="price" />
            </div>
          </div>

          <div className="searchOptions flex">
            <FaFilter />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home