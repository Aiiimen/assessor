import React from "react";

import CourseDuration from "../course-duration/CourseDuration";
import Decision from "../decision/Decision";

class FullCost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseDuration: 0,
      courseFee: this.props.courseFee
    };
  }

  setCourseLength = length => {
    this.setState({
      courseDuration: length
    });
  };

  render() {
    let decision;
    //display dicision when value is entered
    if (this.state.courseDuration !== 0) {
      decision = (
        <Decision
          courseLength={this.state.courseDuration}
          courseFee={this.state.courseFee}
          courseType="full-cost"
        />
      );
    }
    return (
      <div>
        <div className="ui segment">
          <h3>Full Cost Course details</h3>
          <CourseDuration courseLength={this.setCourseLength} />
        </div>

        {decision}
      </div>
    );
  }
}

export default FullCost;
