import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../actions";
import Payments from "./Payments";

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google/">Login With Google</a>
          </li>
        );
      default:
        return (
          <>
            <li>
              <Payments />
            </li>
            <li>
              <a href="/api/logout/">Logout</a>
            </li>
          </>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Survey
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  ({ auth }) => ({ auth: auth }),
  { fetchUser }
)(Header);
