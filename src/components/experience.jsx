import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default class Experience extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#0B192F'}}>
        <section className="colorlib-about" data-section="experience">
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
            <h4 style={{ color: '#CCD6F6'}}>Lead Alternate Media Editor <a  target="_blank" rel="noopener noreferrer" href="https://web.csulb.edu/divisions/students/dss/aim/" style={{ color: '#64ffda'}}> @CSU-LONG BEACH, CA </a></h4><br></br>
            
            <p style={{ color: '#8892B0'}}>
            <ul>
            <li>Provided Software Services for disabled Students and translated the Course Instructional Materials into Accessible Format</li>
            <li>Eliminated Paper-based Services and rendered functional contribution in the automation of converted Alternative Formats</li>
            <li>Lead a team of 6 and played a Key role in Quality Checking and detected 150+ bugs and updated the Website regularly </li>
            <li>Technologies: JAWS, Microsoft Office Suite, Kurzweil 3000, Zoom Text, Dragon Naturally Speaking</li>
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
                October, 2020 – December 2020
                </div>
              )}
            >
            <h4 style={{ color: '#CCD6F6'}}> Data Analytics Intern <a  target="_blank" rel="noopener noreferrer" href="https://home.kpmg/us/en/home.html" style={{ color: '#64ffda'}}> @KPMG, USA</a></h4><br></br>
            
            <p style={{ color: '#8892B0'}}>
            <ul>
            <li>Assessed the Data Quality to evaluate a dataset that included data cleaning and filtering using Python</li>
            <li>Performed Data Exploration, Model Development, and Interpretation to obtain Insights to recommend 1000 target customers</li>
            <li>Created an interactive dashboard using PowerBI to determine trends, patterns, and most important insights of the data in Tableau</li>
            <li>Technologies: Python, pandas, numpy, matplotlib, PowerBI, Tableau</li>
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
            <h4 style={{ color: '#CCD6F6'}}>Amazon Campus Mentorship Series(ACMS)- Amazon Kindle <a  target="_blank" rel="noopener noreferrer" href="https://developer.amazon.com/" style={{ color: '#64ffda'}}> @Amazon, India</a></h4><br></br>
            
            <p style={{ color: '#8892B0'}}>
            <ul>
            <li>Worked on Personalized Multiuser Blogging platform for our Institution that allows Professors to interact with 200+ students</li>
            <li>Created the User Interface that allows users to create and manage blogs, View, Like/Dislike, Comment and Share</li>
            <li>Designed and developed a Private analytical dashboard with timely notification capabilities for each user</li>
            <li>Coordinated Front end and Backend maintenance under the Mentorship of SDE 2 in Amazon Kindle Team</li>
            <li>Technologies: HTML, CSS, JavaScript, jQuery, AngularJS, XAMPP, PHP and SQL</li>

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
                August, 2015 – November 2015
                </div>
              )}
            >
            <h4 style={{ color: '#CCD6F6'}}>C Programmer - Trainee <a  target="_blank" rel="noopener noreferrer" href="http://www.et.iitb.ac.in/" style={{ color: '#64ffda'}}> @IIT-Bombay, India</a></h4><br></br>
            
            <p style={{ color: '#8892B0'}}>
            <ul>
            <li>Took part under the guidance of a Professor in a team of 5 trainees and demonstrated strong technical coding skills</li>
            <li>Participated in conversion of logical sequence, requirements into C modules, debugging and modifying it to add new functionalities</li>
            <li>Prepared technical documentation of C libraries and failure reports, that resulted in 10% decrease in time needed to clarify doubts</li>
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
