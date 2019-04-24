import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { createSurvey } from "../../actions";

import formFields from "./formFields";

export default connect(
  state => ({ formValues: state.form.surveyForm.values }),
  { createSurvey }
)(({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please Confirm your entries</h5>
      {reviewFields}
      <button
        onClick={onCancel}
        className="yellow darken-3 white-text btn-flat"
      >
        <i className="material-icons left">chevron_left</i>Back
      </button>
      <button
        onClick={() => createSurvey(formValues)}
        className="green white-text btn-flat right"
      >
        <i className="material-icons right">email</i>Send Survey
      </button>
    </div>
  );
});
