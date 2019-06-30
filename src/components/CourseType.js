import React from "react";

import FullCost from "./course-types/FullCost";
import CoFunded from "./course-types/CoFunded";
import Loan from "./course-types/Loan";

class CourseType extends React.Component {
  render() {
    let courseType;

    switch (this.props.courseType) {
      case "full-cost":
        courseType = <FullCost courseFee={this.props.courseFee} />;
        break;
      case "co-funded":
        courseType = <CoFunded courseFee={this.props.courseFee} />;
        break;
      case "loan":
        courseType = <Loan courseFee={this.props.courseFee} />;
        break;
      default:
        courseType = null;
    }

    return <div>{courseType}</div>;
  }
}

export default CourseType;
