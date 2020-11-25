import React, { Component } from 'react'

 import{ DevIcons } from "react-icons/di";
 import {DiHtml5, DiCss3, DiSass, DiReact, DiJava,DiPython,DiAndroid, DiBootstrap,  DiJavascript,DiNodejs, DiGit, DiAws, DiMysql, DiMongodb, DiPostgresql, DiDjango} from "react-icons/di"

export default class About extends Component {
  render() {
    return (
    <div style={{backgroundColor: '#0B192F'}}>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    
                    <span className="heading-meta" style={{ color: '#64ffda' }}>About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p><b>Hello! I'm Sakthi,  </b>
                         Graduate student pursuing a Master’s degree in Computer Science with a sound understanding of fundamental concepts, upholding unique intellect and persistent drive towards technology and development. Excellent teamwork skills through previous experience, and the ability to easily collaborate with different groups and departments. Analytical and detail-oriented, allowing for quick troubleshooting and identification of viable solutions.
                        Interested in full-stack, backend and frontend web development.  </p>
                     </div>
                </div>
            </div>
            </div>
        
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <span className="heading-meta" style={{ color: '#64ffda' }}>Skills</span>
                    <h2 className="colorlib-heading">Here are some of my expertise!</h2>
                </div>
                </div>
                <div class="social-container" >
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <section  className="skills social">
                    <DiHtml5 size="3em" />
                    <DiSass size="3em" />
                    <DiCss3 size="3em" />
                    <DiJavascript size="3em" />
                    <DiReact size="3em" />
                    <DiGit size="3em" />
                    <DiBootstrap size="3em" />
                    <DiNodejs size="3em" />
                    <DiJava size="3em" />
                    <DiPython size="3em" />
                    <DiDjango size="3em" />
                    <DiMysql size="3em" />
                    <DiMongodb size="3em" />
                    <DiPostgresql size="3em" />
                    <DiAndroid size="3em" />
                    <DiAws size="3em" />
                </section>
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
