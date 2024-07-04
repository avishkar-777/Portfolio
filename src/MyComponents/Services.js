import React from 'react'
import './Services.css'


export const Services = () => {
  return (
    <div>
        <div className="service" id="service">
          <div className="title">

              <h2>Our Services</h2> 

          </div>
          <div className="box">
              <div className="card">
                  <i className="bi bi-code-square"></i>
                  <h5>Software Development</h5>
                  <div className="pra">
                      <p>Every Website should be built with two primary goals: Firstly, it needs to work across all
                          devices. Secondly, it needs to be fast as possible.</p>
                      <p style={{ textAlign: 'center' }}>
                          <a className="button" href="#">Read More</a>
                      </p>
                  </div>

              </div>

              <div className="card">
                  <i className="bi bi-person-fill"></i>
                  <h5>Interface Development</h5>
                  <div className="pra">
                      <p>Every Website should be built with two primary goals: Firstly, it needs to work across all
                          devices. Secondly, it needs to be fast as possible.</p>
                      <p style={{textAlign: 'center' }}>
                          <a className="button" href="#">Read More</a>
                      </p>
                  </div>

              </div>

              <div className="card">
                  <i className="bi bi-bell-fill"></i>
                  <h5>Web Development</h5>
                  <div className="pra">
                      <p>Every Website should be built with two primary goals: Firstly, it needs to work across all
                          devices. Secondly, it needs to be fast as possible.</p>
                      <p style={{ textAlign: 'center' }}>
                          <a className="button" href="#">Read More</a>
                      </p>
                  </div>
              </div>
        </div>
      </div>
      <div class="contact-me" id="contact">
        <p>Let Me Get You A Beautiful Website. </p>
        <a href="#social" class="button">Hire Me</a>
        {/* <!-- <button id="downloadZip" >Download ZIP</button> --> */}
        <a id="downloadZip" href="https://drive.google.com/file/d/1tdfJ7aa3q0G1mpDeIHY8Z6m6lJM2kV5j/view?usp=drive_link" class="button">Download CV</a>

    </div>
    </div>
  )
}
