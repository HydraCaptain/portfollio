import React from 'react'
import "./home.css"
import bg from "../asset/Clipped_image_20240218_200541 copy.png"
import { Link } from "react-scroll"
import HC from "../asset/html0000.png"
import wd from "../asset/website-design.png"
import ui from "../asset/ui-design.png"
import ad from "../asset/app-design.png"
const Home = () => {
  return (
    <section id="intro">
      <div className="homecontent">
        <span className="helo">Hello </span>
        <span className="introtext">I'm <span className="introname">Jay</span> <br /> Website Designer</span>
        <p className="disc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</p>
        <Link><button className="btn">Hire Me</button></Link>
        <div className="skils">
          <h2>My Skills</h2>
          <div className="skilslist">
            <div className="skilslist1">
              <Link><button className="skiltype"><img src={HC} alt="Html+Css" /></button></Link>
              <Link><button className="skiltype"><img src={ui} alt="" /></button></Link>
            </div>
            <div className="skilslist2">
              <Link><button className="skiltype"><img src={wd} alt="Website-Design" /></button></Link>
              <Link><button className="skiltype"><img src={ad} alt="" /></button></Link>
            </div>
          </div>
        </div>
      </div>
      <img src={bg} alt="profile" className='bg' />
    </section>
  )
}

export default Home;