import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={700}
        currency="CAD"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Survey"
        description="$7 for 5 survey credits"
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  state => ({}),
  { handleToken }
)(Payments);
