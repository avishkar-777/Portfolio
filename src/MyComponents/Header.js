import React from 'react'
import PropTypes from 'prop-types'
import './Header.css';

export default function Header(props) {
  return (
    <header>
        <div className="hero" id="home">
            <nav>
                <h2 className="logo">{props.title}<span>lio</span></h2>
                <ul className="navigation">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                     {/* <li><a href="#">Skills</a></li> */}
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <a href="#" className="btn">Subscribe</a>
                <i className="bi bi-menu-button-wide-fill" id="menu"></i>
                <div className="mode">
                    <input type="checkbox" className="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox" className="label">
                        <i className="bi bi-moon-fill" id="light-mode"></i>
                        <i className="bi bi-brightness-high-fill" id="light-mode"></i>
                        <div className="ball"></div>
                    </label>
                    {/* <i className="bi bi-brightness-high-fill" id="light-mode"></i> 
                    <i className="fa fa-solid fa-moon" id="dark-mode" click="lightMode()"></i>  */}
                </div>

            </nav>
            </div>
    </header>
  )
}

Header.propTypes = {
    title : PropTypes.string
}
