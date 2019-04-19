import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurverNew = () => <h2>SurveyNew</h2>;

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
            <Route path="/surveys/new" exact component={SurverNew} />
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
