import React from "react";

class BooleanQuestion extends React.Component {
  onBooleanSelect = e => {
    this.props.answer(e.target.value);
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h1 className="ui sub header">{this.props.question}</h1>
        <select onChange={this.onBooleanSelect} className="ui dropdown">
          <option hidden>Please Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    );
  }
}

export default BooleanQuestion;
