import React, { Component } from "react";
import img1 from "./Capture.PNG";

export default class ShowProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "saif eddine harhouri",
      bio: "full stack student",
      imgsrc: (
        <img
          src={img1}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          alt=""
        />
      ),
      proffession: "enginieur",
      isshowing: false,
      counter: 0,
    };
  }
  componentDidMount() {
    this.myinetval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myinetval);
  }

  render() {
    return (
      <div>
        {this.state.fullName}
        <br />
        {this.state.bio}
        <br />
        {this.state.imgsrc}
        <br />
        {this.state.proffession}
        <br />
        <br />

        {this.state.counter}

        <br />
      </div>
    );
  }
}
