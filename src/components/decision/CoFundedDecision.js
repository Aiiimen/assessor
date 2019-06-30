import React from "react";
import YoungStudent from "./cofunded-decision/entitlement-decisions/YoungStudent";
import Entitlement from "./cofunded-decision/Entitlement";
import Employment from "./cofunded-decision/Employment";

class CoFundedDecision extends React.Component {
  render() {
    //learner is 16 - 18
    if (this.props.age >= 16 && this.props.age <= 18) {
      return <YoungStudent age={this.props.age} />;
    }

    if (this.props.age >= 19 && this.props.age <= 23) {
      return <Entitlement courseFee={this.props.courseFee} />;
    }

    if (this.props.age >= 24) {
      return <Employment courseFee={this.props.courseFee} />;
    }
  }
}

export default CoFundedDecision;
