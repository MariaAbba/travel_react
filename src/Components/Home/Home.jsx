import React, { useEffect, useState } from 'react'
import './home.scss'
import video from '../../assets/video.mp4'
import { CiLocationOn } from 'react-icons/ci'
import { FaFilter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { TbApps } from 'react-icons/tb'
import { BsListTask } from 'react-icons/bs'
import { FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const [sliderValue, setSliderValue] = useState(0)

  const handleSliderValue = (e) => {
    setSliderValue(e.target.value)
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="destination">Search Your Destination:</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter name here..."
                id="destination"
              />
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
              <h3 className="total">${sliderValue}</h3>
            </div>
            <div className="input flex">
              <input
                type="range"
                max="5000"
                min="1000"
                id="price"
                value={sliderValue}
                onChange={handleSliderValue}
              />
            </div>
          </div>

          <div className="searchOptions flex">
            <FaFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
