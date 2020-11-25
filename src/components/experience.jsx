import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default class Experience extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#0B192F'}}>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                <span className="heading-meta" style={{ color: '#64ffda' }}>Experience</span>
                <h2 className="colorlib-heading">Where I've worked</h2>
                </div>
            <br></br>
            <Timeline lineColor={'grey'}>
            <TimelineItem
            dateComponent={(
                <div
                  style={{
                    display: 'block',
                    float: 'left',
                    padding: '5px',
                    background: '#0B192F',
                    color: '#A8B2CD',
                  }}
                >
                October, 2019 – Present
                </div>
              )}
            >
            <h4 style={{ color: '#CCD6F6'}}>Web Developer <a href="https://web.csulb.edu/divisions/students/dss/aim/" style={{ color: '#64ffda'}}> @AIM Center, CSULB</a></h4><br></br>
            
            <p style={{ color: '#8892B0'}}>
            <ul>
            <li>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation.</li>
            <li> Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. </li>
            <li> Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.</li>
            </ul>
            </p>
          
            </TimelineItem>
            <TimelineItem
            dateComponent={(
                <div
                  style={{
                    display: 'block',
                    float: 'left',
                    padding: '5px',
                    background: '#0B192F',
                    color: '#A8B2CD',
                  }}
                >
                March, 2017 – July 2017
                </div>
              )}
            >
            <h4 style={{ color: '#CCD6F6'}}>Amazon Campus Mentorship Series (ACMS) <a href="https://developer.amazon.com/" style={{ color: '#64ffda'}}> @Amazon, India</a></h4><br></br>
            
            <p style={{ color: '#8892B0'}}>
            <ul>
            <li>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation.</li>
            <li> Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. </li>
            <li> Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.</li>
            </ul>
            </p>
          
            </TimelineItem>
              </Timeline>
            </div>
            </div>
            </div>
            </div>
</section>
</div>

    )
  }
}
