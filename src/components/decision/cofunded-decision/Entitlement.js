import React from "react";
import BooleanQuestion from "../BooleanQuestion";
import Employment from "./Employment";
import Success from "../cofunded-decision/entitlement-decisions/Success";

class Entitlement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseEntitlement: null,
      applicantEntitlement: null
    };
  }

  courseEntitlement = answer => {
    this.setState({
      courseEntitlement: answer
    });
  };

  applicantEntitlement = answer => {
    this.setState({
      applicantEntitlement: answer
    });
  };

  render() {
    const courseEnt = this.state.courseEntitlement;
    const appEnt = this.state.applicantEntitlement;
    //fetch course ent info
    if (courseEnt === null) {
      console.log("courseEnt Null");
      return (
        <BooleanQuestion
          title="Course & Student Entitlement"
          question="Does the course have a level 2 OR level 3 entitlement?"
          answer={this.courseEntitlement}
        />
      );
    }

    //if course has not L3/L2 entitlemtn move to Employment
    if (courseEnt === "no" && appEnt === null) {
      return <Employment courseFee={this.props.courseFee} />;
    }

    //if courseEntitlement is true - fetch app ent info
    if (appEnt === null) {
      console.log("appEnt is null and courseEnt is yes");
      return (
        <div>
          <BooleanQuestion
            title="Course & Student Entitlement"
            question="Does the student hold the same qualification as the course?"
            answer={this.applicantEntitlement}
          />
        </div>
      );
    }

    //both yes - student can enrol
    if (courseEnt === "yes" && appEnt === "no") {
      console.log("courseEnt is yes and AppEnt is no");
      return <Success />;
    }

    //student already holds L2 or L3 qual - move to employment
    if (courseEnt === "yes" && appEnt === "yes") {
      console.log("courseEnt is yes and Appent is yes");
      return <Employment courseFee={this.props.courseFee} />;
    }

    return <Employment courseFee={this.props.courseFee} />;
  }
}

export default Entitlement;
