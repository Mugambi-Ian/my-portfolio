import React, { Component } from "react";
import "./anim.css";
export class SlideUp extends Component {
  anim = {
    animation: `${"slide-up-anim"} ${this.props.time}`,
    width: "100%",
    height: "100%",
  };
  render() {
    return (
      <div className="slide-up" style={this.anim}>
        {this.props.component}
      </div>
    );
  }
}
