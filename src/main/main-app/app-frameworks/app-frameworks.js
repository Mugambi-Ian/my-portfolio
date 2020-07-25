import React, { Component } from "react";
import { FadeIn } from "../../../assets/anim/fade-in/anim";
import { frameworks } from "../../../config/config";
import Loader from "../app-splash/app-loader";
import "./app-frameworks.css";
export default class Frameworks extends Component {
  constructor() {
    super();
    this.state = {
      frameworks: frameworks,
      loaded: true,
    };
  }
  frameworkContainer(data) {
    return (
      <div className="framework-card">
        <img src={data.frameworkLogo} alt="logo" />
        <h4>{data.frameworkName}</h4>
      </div>
    );
  }
  frameworksDiv() {
    return (
      <div className="frameworks-list">
        {this.state.frameworks.map((data, positon) => {
          return this.frameworkContainer(data);
        })}
      </div>
    );
  }
  render() {
    return (
      <FadeIn
        time=".5s"
        component={
          <div className="content-body">
            <h2
              style={{
                backgroundColor: "#fff",
                padding: "5px",
                position: "absolute",
                width: "100%",
                zIndex: "3",
                color: "#729fcf",
                top: "5px",
                marginTop: "0px",
              }}
            >
              Languages and Frameworks
            </h2>
            <div style={{ marginTop: "50px", height: "85%" }}>
              {this.state.loaded === false ? <Loader /> : this.frameworksDiv()}
            </div>
          </div>
        }
      />
    );
  }
}
