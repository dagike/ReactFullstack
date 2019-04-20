import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  handleToken = token => {
    console.log(token);
  };
  render() {
    return (
      <StripeCheckout
        amount={700}
        currency="CAD"
        token={this.handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Survey"
        description="$7 for 5 survey credits"
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
