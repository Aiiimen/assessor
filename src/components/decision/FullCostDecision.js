import React from "react";

import FlexEd from "../decision/cofunded-decision/employment-decisions/FlexEd";
import PayInFull from "./fullcost-decision/PayInFull";

//full cost decision: if 12+ && +£250 -> flexEd
//else pay in full.

class FullCostDecision extends React.Component {
  render() {
    if (this.props.courseLength >= 12 && this.props.courseFee >= 250) {
      return <FlexEd courseFee={this.props.courseFee} />;
    } else {
      return <PayInFull courseFee={this.props.courseFee} />;
    }
  }
}

export default FullCostDecision;
