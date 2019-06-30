import React from "react";

const PayInFull = props => {
  return (
    <div>
      <p>
        Applicant needs to pay <strong>£{props.courseFee}</strong> in Full.
      </p>
    </div>
  );
};

export default PayInFull;
