import React, {Component} from 'react';
import './App.css';
import './header.css';
import Home from './Home';
import Skill from './Skill';
import Mern from './Mern';
import Shoes from './Shoes';
import Contact from './Contact';

import {Link} from 'react-scroll';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Home />
        <Skill />
        <Mern />
        <Shoes />
        <Contact />
      </div>
    );
  }
}

class Header extends Component{
  render(){
      const lists=["Home", "Skill", "Mern", "Shoes", "Contact"];
      const listMenu = lists.map((list, index) => 
      <li  key={index}>
      <Link
      activeClass="active"
      to={list}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >{list}</Link>
      </li>);
     
      return(
          <div className="header">
            <div className="header-content">
            <div className="header-name">
              <p><Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >Portfolio</Link></p>
            </div>
            <div className="header-list">
              <ul>
                {listMenu}
              </ul>
            </div>
            </div>
          </div>
      );
  }
}

export default App;
