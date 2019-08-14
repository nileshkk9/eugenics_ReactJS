import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Sidebar isInput={true} />
      </div>
    );
  }
}

export default Main;
