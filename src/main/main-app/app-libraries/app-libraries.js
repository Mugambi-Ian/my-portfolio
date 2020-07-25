import React, { Component } from "react";
import { FadeIn } from "../../../assets/anim/fade-in/anim";
import { firebase } from "../../../config/config";
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
    await firebase
      .database()
      .ref("libraries")
      .on("value", (ds) => {
        const libraries = [];
        ds.forEach((x) => {
          libraries.push(x.val());
        });
        this.setState({
          libraries: libraries,
          loaded: true,
        });
      });
  }
  libraryContainer(data) {
    return (
      <div
        className="library-card"
        onClick={() => {
         // this.openGit(data.gitLink);
        }}
      >
        <img src={data.libraryIcon} alt="logo" />
        <h4>{data.libraryName}</h4>
        <p>{data.libraryTitle}</p>
      </div>
    );
  }
  openGit = (link) => {
    window.open(link, "_blank");
  };

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
