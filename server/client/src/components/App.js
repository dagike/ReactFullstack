import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyCreate from "./surveys/SurveyCreate";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" exact component={SurveyCreate} />
            <Route path="/" exact component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({ auth }),
  { fetchUser }
)(App);
