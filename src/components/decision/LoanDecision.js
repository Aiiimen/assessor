import React from "react";
import BooleanQuestion from "./BooleanQuestion";
import Success from "./loan-decision/Success";
import ApplicationNeeded from "./loan-decision/ApplicationNeeded";
import NoApplication from "./loan-decision/NoApplication";

class LoanDecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanEvidence: null,
      loanApplied: this.props.loan
    };
  }

  onEvidenceSeen = answer => {
    this.setState({
      loanEvidence: answer
    });
  };

  render() {
    //not applying for loan
    if (this.state.loanApplied === "no") {
      return <NoApplication courseFee={this.props.courseFee} />;
    }

    //applied for loan - check if evidence seen

    if (this.state.loanEvidence === null) {
      return (
        <BooleanQuestion
          question="Have you seen evidence of application?"
          answer={this.onEvidenceSeen}
        />
      );
    }

    //applied for loan & evidence seen
    if (this.state.loanApplied === "yes" && this.state.loanEvidence === "yes") {
      return <Success />;
    }

    //applied for loan but no evidence seen
    if (this.state.loanApplied === "yes" && this.state.loanEvidence === "no") {
      return <ApplicationNeeded />;
    }
  }
}

export default LoanDecision;
