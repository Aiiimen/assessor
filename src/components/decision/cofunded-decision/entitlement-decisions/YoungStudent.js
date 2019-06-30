import React from "react";

const YoungStudent = props => {
  return (
    <div>
      <p>
        Applicant doesn't need to pay as they're {props.age}. Applicant can
        Enrol.
      </p>
      <div>
        <div className="ui yellow label">
          Make sure to include a gardians contact details
        </div>
        <div className="ui yellow label">
          capture consent to contact parents
        </div>
        <div className="ui yellow label">
          Fill out English & Maths Results on EBS & Interview Card
        </div>
      </div>
    </div>
  );
};

export default YoungStudent;
