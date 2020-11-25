import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#0B192F'}}>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                		<span className="heading-meta" style={{ color: '#64ffda' }}> Certifications</span>
                		<h2 className="colorlib-heading">Certifications</h2>       		
            		</div>
            	</div>
            
				<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
				<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">THE COMPLETE 2020 WEB DEVELOPER BOOTCAMP </a><br></br> 
                        Udemy
                        <br></br>
                        <a href="https://www.udemy.com/certificate/UC-95e2abc3-d958-480b-a43a-e4e8f1a21008/"> See Credentials </a>
                        </div>
                        <div class="col-md-6">
                        <p style={{textAlign: 'right'}}>August 2020</p>
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
