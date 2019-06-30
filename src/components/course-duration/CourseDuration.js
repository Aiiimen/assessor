import React from "react";

class CourseDuration extends React.Component {
  onCourseLengthChange = e => {
    let length = e.target.value;
    this.props.courseLength(length);
  };
  render() {
    return (
      <div>
        <h3 className="ui sub header">Enter Course Length (weeks)</h3>
        <div className="ui input">
          <input type="text" onChange={this.onCourseLengthChange} />
        </div>
      </div>
    );
  }
}

export default CourseDuration;
