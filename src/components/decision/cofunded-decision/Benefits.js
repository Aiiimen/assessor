import React from "react";

import StateBenefit from "./benefits-decisions/StateBenefit";
import Success from "./benefits-decisions/Success";
import FlexEd from "../cofunded-decision/employment-decisions/FlexEd";

class Benefits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onBenefits: null
    };
  }

  onBenefit = answer => {
    this.setState({
      onBenefits: answer
    });
  };
  render() {
    console.log(this.state.onBenefits);
    if (this.state.onBenefits === null) {
      return <StateBenefit onBenefits={this.onBenefit} />;
    }

    if (this.state.onBenefits === "yes") {
      return <Success />;
    }

    if (this.state.onBenefits === "no") {
      return <FlexEd courseFee={this.props.courseFee} />;
    }
  }
}

export default Benefits;
