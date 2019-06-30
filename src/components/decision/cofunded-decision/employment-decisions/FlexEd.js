import React from "react";

const FlexEd = props => {
  const minPayment = props.courseFee / 4;

  return (
    <div>
      <p>
        Applicant Needs to pay <strong>£{props.courseFee}</strong>
      </p>
      <p>Applicant can pay for their course in instalments with FlexEd</p>
      <p>
        Minimun payment of <strong>£{minPayment}</strong> is required for
        Enrolment.
      </p>
      <div>
        <div class="ui yellow label">
          Make sure the email & phone number is correct!
        </div>
        <div class="ui yellow label">Fill Out FlexEd Payment Form!</div>
        <div class="ui yellow label">Select FlexEd in Payment Method</div>
        <div class="ui yellow label">
          Applicant pays £6 more per instalments
        </div>
      </div>
    </div>
  );
};

export default FlexEd;
