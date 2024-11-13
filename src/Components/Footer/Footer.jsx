import React from 'react'
import './footer.scss'
import video2 from '../../assets/video2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { SiTripadvisor } from 'react-icons/si'
import { FaChevronRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter email address" />
            <button className="btn flex" type="submit">
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

            <div className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque officiis perspiciatis voluptatum quos ipsa aliquid,
              praesentium accusantium et ipsum ea non nemo nam magnam enim,
              quod, minima earum dolores reiciendis!
            </div>

            <div className="footerSocials flex">
              <FaSquareXTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
