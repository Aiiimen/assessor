import React from "react";
import ReactDOM from "react-dom";

import CourseDetails from "./components/CourseDetails";

class Assessor extends React.Component {
  render() {
    return <CourseDetails />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Assessor />, rootElement);
