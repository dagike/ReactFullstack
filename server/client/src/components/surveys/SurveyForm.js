import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" }
];

class SurveyForm extends Component {
  renderFields = () => {
    return _.map(FIELDS, ({ label, name }) => (
      <Field
        key={name}
        label={label}
        type="text"
        name={name}
        component={SurveyField}
      />
    ));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className="teal btn-flat right white-text" type="submit">
            Next <i className="material-icons right">chevron_right</i>
          </button>
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
};

export default reduxForm({ validate, form: "surveyForm" })(SurveyForm);
