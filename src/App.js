import React, { Component } from "react";
import ShowProfile from "./components/ShowProfile";

import "./index.css";

export default class App extends Component {
  state = {
    isshowing: false,
  };

  handelclik = () => {
    this.setState({ isshowing: !this.state.isshowing });
  };

  render() {
    return (
      <div>
        <button onClick={this.handelclik}>
          {this.state.isshowing ? "hide" : "show"}
        </button>
        {this.state.isshowing && <ShowProfile />}
      </div>
    );
  }
}
