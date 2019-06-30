import React from "react";
import BooleanQuestion from "../../BooleanQuestion";
import FlexEd from "./FlexEd";
import Lowwage from "./Lowwage";

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 0
    };
  }

  getIncome = answer => {
    this.setState({
      income: answer
    });
  };
  render() {
    if (this.state.income === 0) {
      return (
        <div>
          <h3>Employment Details</h3>
          <BooleanQuestion
            question="Is your icome higher than £25.000 a year?"
            answer={this.getIncome}
          />
        </div>
      );
    }

    if (this.state.income === "yes") {
      return <FlexEd courseFee={this.props.courseFee} />;
    }

    if (this.state.income === "no") {
      return <Lowwage />;
    }
  }
}

export default Income;
