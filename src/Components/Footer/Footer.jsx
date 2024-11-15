import React, { useEffect } from 'react'
import './footer.scss'
import video2 from '../../assets/video2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { SiTripadvisor } from 'react-icons/si'
import { FaChevronRight } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <label htmlFor="email">Email</label>
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter email address"
              id='email'
              autoComplete='required'
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a className="logo flex" href="#">
                <MdOutlineTravelExplore className="icon" /> TRAVEL
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque officiis perspiciatis voluptatum quos ipsa aliquid,
              praesentium accusantium et ipsum ea non nemo nam magnam enim,
              quod, minima earum dolores reiciendis!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaSquareXTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Gr 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* Gr 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Rent cars
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Hostel World
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* Gr 3 */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>{currentYear}</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
