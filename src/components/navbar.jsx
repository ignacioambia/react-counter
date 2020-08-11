import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="http://localhost:3000/">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">8</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
