import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Experience  from './components/experience'
import Education  from './components/education'
import Project from './components/projects'
import Blog from './components/blog'
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
           <Blog></Blog>
           <Contact></Contact>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
