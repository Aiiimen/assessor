import React from "react";

import ApplicantAge from "../applicant/ApplicantAge";
import Decision from "../decision/Decision";

class CoFunded extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: null
    };
  }

  setApplicantAge = age => {
    this.setState({
      age: age
    });
  };
  render() {
    console.log(this.state.age);
    let decision;

    if (this.state.age >= 16) {
      decision = (
        <Decision
          courseFee={this.props.courseFee}
          age={this.state.age}
          courseType="co-funded"
        />
      );
    }
    return (
      <div>
        <ApplicantAge age={this.setApplicantAge} />
        {decision}
      </div>
    );
  }
}

export default CoFunded;
