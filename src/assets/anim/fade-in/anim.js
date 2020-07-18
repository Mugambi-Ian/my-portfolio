import React, { Component } from "react";
import "./anim.css";

export class FadeIn extends Component {
  anim = {
    animation: `${"fadeIn"} ease ${this.props.time}`,
    width: "100%",
    height: "100%",
  };
  render() {
    return <div style={this.anim}>{this.props.component}</div>;
  }
}
