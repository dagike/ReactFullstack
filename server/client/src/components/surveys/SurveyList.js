import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => (
      <div className="card blue-grey dark-1" key={survey._id}>
        <div className="card-content white-text">
          <span className="cart-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a href="#/">Yes: {survey.yes}</a>
          <a href="#/">No: {survey.no}</a>
        </div>
      </div>
    ));
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

export default connect(
  ({ surveys }) => ({ surveys }),
  { fetchSurveys }
)(SurveyList);
