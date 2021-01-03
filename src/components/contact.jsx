import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import ScrollToTop from "react-scroll-up";


export default class Contact extends Component {
  render() {
    return (
    <div style={{backgroundColor: '#0B192F'}}>
        <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                 <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="connect"><br></br>
                    <span className="heading-meta" style={{ color: '#64ffda' }}>GET IN TOUCH!</span>
                    <h2 className="colorlib-heading">CONTACT ME! SAY HELLO!</h2>
                     <p>I'm looking for any opportunities and Available to Hire.
                    I am passionate about building excellent software that improves the lives of those around me. My goal is to always build applications that are scalable and efficient under the hood while providing intuitive, satisfying user experiences. Please feel free to contact me if you find me a good fit.</p>

                    <p>Open for Freelance projects as well. Get in touch with me if you have any project ideas via <a  target="_blank" rel="noopener noreferrer" href="mailto:sakthikarthigaiselvi.sekar@gmail.com"><u>email</u></a> or <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sakthi-sekar/"><u>LinkedIn</u></a> for more details.</p>  
                    </div>
                </div>
                </div>
            </div>
            </div>
        
        
           
            <div class="social-container" >
            <div class="row">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div class="connect">
                <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sakthi-sekar/" 
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a  target="_blank" rel="noopener noreferrer" href="https://github.com/Sakthisks"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Sakthi.Sekar1998/"
                  className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sakthi_sks/"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
            </div>
           
            <div>
            <ScrollToTop duration={130} showUnder={3600} >
            <img src={require('./scroll.png')}  width="35" height="40" /> 
            <p style={{ margin: '-25px' }}><br></br>Back to Top!</p>   
            </ScrollToTop>
            </div>  

                
            </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
