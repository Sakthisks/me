import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default class Experience extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#0B192F'}}>
       <section class="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
            <div class="row">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div className="col-md-12 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                <span className="heading-meta" style={{ color: '#64ffda' }}>Education</span>
                <h2 className="colorlib-heading">Academic Background</h2>
            </div>
            </div>
            </div>
            <br></br>
                    
            <div class="row">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div class="fancy-collapse-panel">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Master in Computer Science</a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                        <a href="https://www.csulb.edu/">CALIFORNIA STATE UNIVERSITY, LONG BEACH </a><br></br> 
                        <a href="https://www.csulb.edu/college-of-engineering/computer-engineering-computer-science"> Computer Engineering and Computer Science </a>
                        <br></br>GPA: 3.5
                        </div>
                        <div class="col-md-6">
                        <p style={{textAlign: 'right'}}>August 2019 - May 2021</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Computer Science
                    </a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                        <a href="https://www.mitindia.edu/en/"> ANNA UNIVERSITY, INDIA </a><br></br> 
                        <a href="http://www.ct.mitindia.edu/"> Computer Science and Engineering</a> 
                        <br></br>GPA: 3.3
                        </div>
                        <div class="col-md-6">
                        <p style={{textAlign: 'right'}}>August 2015 - April 2019</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
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
