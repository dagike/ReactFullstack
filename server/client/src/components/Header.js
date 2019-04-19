import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Survey
          </Link>
          <ul className="right">
            <li>
              <Link to="/auth/google/">Login With Google</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
