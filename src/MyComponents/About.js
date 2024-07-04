import React from 'react'
import myImg from '../Images/DSC_9111.JPG'
import './About.css'

export const About = () => {
  return (
    <div>
      <div className="content">
          <h4>Hello My name is</h4>
          <h1>Avishkar Raut</h1>
          <h3>I am a Software Developer..</h3>
          {/* <div className="newslatter">
              <form>
                  <input type="email" name="Email" id="mail" placeholder="Enter your email here!"/>
                  <input type="submit" id="letsSub" value="Let's Start"/>
              </form>
          </div> */}
      </div>
      <section className="about" id="about">
      <div className="main">
          <img src={myImg} alt="My"/>
          <div className="about-text">
              <h2>About Me</h2>
              <h5>Software <span>& Machine Interface developer</span></h5>
              <p>I am a Software Developer in java. I can provide clean code and pixel perfect design. I also make the
                  Website more & more interactive with web animations. I can provide clean code and pixel perfect
                  design. I also make the website more & more interactive with web animations. A responsive design
                  makes your website accessible to all users, regardless of their device.</p>
              <button type="button"> Let's Talk</button>
          </div>
      </div>
  </section>
</div>
  )
}
