import React from "react";

import BooleanQuestion from "../BooleanQuestion";
import Benefits from "./Benefits";
import Income from "./employment-decisions/Income";

class Employment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employed: null
    };
  }

  isEmployed = answer => {
    this.setState({
      employed: answer
    });
  };

  render() {
    if (this.state.employed === null) {
      return (
        <div>
          <h3>Employment Details</h3>
          <BooleanQuestion
            question="Is the applicant in paid employment?"
            answer={this.isEmployed}
          />
        </div>
      );
    }

    if (this.state.employed === "yes") {
      return <Income courseFee={this.props.courseFee} />;
    }

    if (this.state.employed === "no") {
      return <Benefits courseFee={this.props.courseFee} />;
    }
  }
}

export default Employment;
