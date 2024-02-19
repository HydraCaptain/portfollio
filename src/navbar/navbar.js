import React from "react";
import "./navbar.css"
import logo from "../asset/logo.png"
import contactimg from "../asset/contact.png"
import { Link } from "react-scroll"
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="navbar-menu">
        <Link className="navbarlistitem">Home</Link>
        <Link className="navbarlistitem">About</Link>
        <Link className="navbarlistitem">Portfolio</Link>
        <Link className="navbarlistitem">Clints</Link>
      </div>
      <button className="contact">
        <img src={contactimg} alt="contact-me" className="contactimg" />Contact me</button>
    </nav>
  )
}

export default Navbar
