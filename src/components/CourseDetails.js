import React from "react";

import CourseType from "./CourseType";

import "./course-type.css";

//fetches information about the course (Type and Price) and passes it on.

class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseType: null,
      courseFee: 0
    };
  }

  onCourseFeeChange = e => {
    this.setState({ courseFee: e.target.value });
  };
  onCourseTypeSelect = e => {
    this.setState({
      courseType: e.target.value
    });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <h1 className="ui header">Assessor</h1>
        </div>
        <div className="ui segment">
          <h3 className="ui header">Course Details</h3>
          <h1 className="ui sub header">Enter course fees</h1>

          <div className="ui input">
            <input type="text" onChange={this.onCourseFeeChange} />
          </div>

          <div className="course-type">
            <h1 className="ui sub header">Select Course Type</h1>
            <select className="ui dropdown" onChange={this.onCourseTypeSelect}>
              <option hidden>Please Select</option>
              <option value="full-cost">Full Cost</option>
              <option value="co-funded">Co Funded</option>
              <option value="loan">ALL or HE Loan</option>
            </select>
          </div>
        </div>

        <CourseType
          courseType={this.state.courseType}
          courseFee={this.state.courseFee}
        />
      </div>
    );
  }
}

export default CourseDetails;
