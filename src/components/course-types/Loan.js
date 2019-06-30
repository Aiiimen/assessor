import React from "react";

import Decision from "../decision/Decision";

class Loan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applyingForLoan: "",
      courseFee: this.props.courseFee
    };
  }

  onLoanSubmit = e => {
    this.setState({
      applyingForLoan: e.target.value
    });
  };

  render() {
    let decision;
    if (this.state.applyingForLoan === "yes") {
      decision = (
        <Decision
          courseFee={this.state.courseFee}
          applyingForLoan={this.state.applyingForLoan}
          courseType="loan"
        />
      );
    } else if (this.state.applyingForLoan === "no") {
      decision = (
        <Decision
          courseFee={this.state.courseFee}
          applyingForLoan={this.state.applyingForLoan}
          courseType="loan"
        />
      );
    }
    return (
      <div>
        <div className="ui segment">
          <h1 className="ui sub header">
            Is the applicant applying for Student Finance?
          </h1>
          <select className="ui dropdown" onChange={this.onLoanSubmit}>
            <option hidden>Please Select</option>
            <option value="yes">Yes, Applying for Student Finance</option>
            <option value="no">No, Not applying for Student Finance</option>
          </select>
        </div>
        {decision}
      </div>
    );
  }
}

export default Loan;
