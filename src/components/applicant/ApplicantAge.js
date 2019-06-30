import React from "react";
class ApplicantAge extends React.Component {
  onAgeSubmit = e => {
    this.props.age(e.target.value);
  };
  render() {
    return (
      <div className="ui segment">
        <h1 className="ui sub header">Enter Applicants Age</h1>
        <div className="ui input">
          <input onChange={this.onAgeSubmit} type="text" />
        </div>
      </div>
    );
  }
}

export default ApplicantAge;
