import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import AccBtn from '../pages/pageElements/accComp';

class Header extends React.Component{

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceScrolled = window.pageYlimit || document.documentElement.scrollTop;
    const limit = 210;
    const header = document.getElementById("header");

    if (distanceScrolled >= limit) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  }
  render(){
  return (
    <header id="header">

        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="">
              HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/Policies" activeClassName="active">
              POLICIES
              </NavLink>
            </li>
            <li>
              <NavLink to="/Appointments" activeClassName="active">
              APPOINTMENTS
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <NavLink to="/" activeClassName="active">
            IDEAL PAWN & JEWELRY
          </NavLink>
        </div>

        <div>

          <AccBtn />
        </div>



    </header>
  );
}
}

export default Header;
