import React from "react";

const NoApplication = props => {
  return (
    <div>
      <p>
        Student can either pay <strong>£{props.courseFee}</strong> in full.
      </p>
      <p>
        Or pay in instalments with FlexEd (payment of{" "}
        <strong>£{props.courseFee / 4} </strong>needed to enrol)
      </p>
      <div>
        <div className="ui yellow label">25% Payment needed if with FlexEd</div>
        <div className="ui yellow label">Select FlexEd in Payment Method</div>
      </div>
    </div>
  );
};

export default NoApplication;
