import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div>
      <footer>
          <p>Avishkar Raut</p>
            <p>Thanks for visiting my profile. I will glad to work with your Association. For more Information Please Contact me...</p>
            <div class="social" id="social">
                {/* <!-- <a href="https://wa.me/qr/7K4SW3CZOUS6A1" target="_blank"><img src="VideoIcon3Outlined.svg" alt=""></a> --> */}
                <a href="https://wa.me/qr/7K4SW3CZOUS6A1" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp" ></i></a>
                <a href="https://www.linkedin.com/in/rautavishkar777/" target="blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.facebook.com/login/n" target="blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/invites/contact/?i=ld4jv1lxe69g&utm_content=5caozld" target="blank" rel="noreferrer"><i
                        class="bi bi-instagram"></i></a>
            </div>
            <div class="call">
                <p> Or call us At : 
                  <a href="#"> 
                    <i class="bi bi-phone"></i>
                    <a href="tel:+917774963662">7774963662</a>
                  </a>
                </p>
            </div>
            <p class="end"><i class="bi bi-c-circle"></i>Copyright by Avishkar Raut</p>
      </footer>
      </div>
  )
}
