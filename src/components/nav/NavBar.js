import React, { Component } from 'react';
import { Link, withRouter, NavLink } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
  render(){

    return (
      <header>
        <h1 className="site-title">NSS Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><NavLink className="nav-link" activeClassName="lime" to="/home">Home</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="lime" to="/animals">Animals</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="lime" to="/locations">Locations</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="lime" to="/employees">Employees</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="lime" to="/owners">Owners</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);