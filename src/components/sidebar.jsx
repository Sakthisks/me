import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight"style={{backgroundColor: '#0B192F'}}>
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Sakthi Karthigai selvi Sekar</a></h1>
              <span className="email"><i className="icon-mail"></i> <a href= 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=sakthikarthigiselvi@gmail.com'>sakthikarthigaiselvi@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse" style={{backgroundColor: '#0B192F'}}>
                <ul>
                  <li>    </li>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#project" data-nav-section="projects">Projects</a></li>
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            
            <div class="social-container">
                <a href="https://www.linkedin.com/in/sakthi-sekar/" 
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/Sakthisks"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.facebook.com/Sakthi.Sekar1998/"
                  className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/sakthi_sks/"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            
          </aside>
        </div>
      </div>
    )
  }
}
