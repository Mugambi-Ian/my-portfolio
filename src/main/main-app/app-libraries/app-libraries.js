import React, { Component } from "react";
import { FadeIn } from "../../../assets/anim/fade-in/anim";
import { fetchLibraries } from "../../../config/config";
import Loader from "../app-splash/app-loader";
import "./app-libraries.css";
export default class Libraries extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      libraries: [],
    };
  }
  async componentDidMount() {
    const x = await fetchLibraries();
    this.setState({
      libraries: x,
      loaded: true,
    });
  }
  openGit = (link) => {
    window.open(link, "_blank");
  };
  libraryContainer(data) {
    return (
      <div
        className="library-card"
        onClick={() => {
          this.openGit(data.gitLink);
        }}
      >
        <img src={data.libraryLogo} alt="logo" />
        <h4>{data.libraryName}</h4>
        <img
          src={require("../../../assets/icons/social/ic-github.svg")}
          className="git-icon"
          alt="git"
        />
      </div>
    );
  }
  librariesDiv() {
    return (
      <div className="libraries-list">
        {this.state.libraries.map((data, positon) => {
          return this.libraryContainer(data);
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
                top: "5px",
                color: "#729fcf",
                marginTop: "0px",
              }}
            >
              My Libraries
            </h2>
            <div style={{ marginTop: "50px", height: "85%" }}>
              {this.state.loaded === false ? <Loader /> : this.librariesDiv()}
            </div>
          </div>
        }
      />
    );
  }
}
