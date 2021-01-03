import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Experience  from './components/experience'
import Education  from './components/education'
import Project from './components/projects'
import Certifications from './components/certifications'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				  <div id="colorlib-main">
					 <Introduction></Introduction>
					 <About></About>
					 <Experience ></Experience >
           <Education ></Education >
           <Project></Project>
           <Certifications></Certifications>
           <Contact></Contact>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
