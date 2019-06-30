import React from "react";

import FullCostDecision from "./FullCostDecision";
import CoFundedDecision from "./CoFundedDecision";
import LoanDecision from "./LoanDecision";

class Decision extends React.Component {
  render() {
    let decision;

    switch (this.props.courseType) {
      case "full-cost":
        decision = (
          <FullCostDecision
            courseFee={this.props.courseFee}
            courseLength={this.props.courseLength}
          />
        );
        break;
      case "co-funded":
        decision = (
          <CoFundedDecision
            courseFee={this.props.courseFee}
            age={this.props.age}
          />
        );
        break;
      case "loan":
        decision = (
          <LoanDecision
            courseFee={this.props.courseFee}
            loan={this.props.applyingForLoan}
          />
        );
        break;
      default:
        decision = null;
    }

    return <div className="ui segment">{decision}</div>;
  }
}

export default Decision;
