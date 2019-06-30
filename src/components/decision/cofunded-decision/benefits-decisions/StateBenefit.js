import React from "react";
import BooleanQuestion from "../../BooleanQuestion";

class stateBenefits extends React.Component {
  getStateBenefits = answer => {
    this.props.onBenefits(answer);
  };
  render() {
    return (
      <div>
        <h3>Benefits Details</h3>
        <div>
          <i>list of benefits here</i>
        </div>
        <BooleanQuestion
          question="Is the applicant on any of the benefits above?"
          answer={this.getStateBenefits}
        />
      </div>
    );
  }
}

export default stateBenefits;
