import React, { Component } from "react";
import { FadeIn } from "../../../assets/anim/fade-in/anim";
import { firebase } from "../../../config/config";
import { Link } from "react-router-dom";
import Loader from "../app-splash/app-loader";
import "./app-projects.css";
export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      projects: [],
    };
  }
  async componentDidMount() {
    await firebase
      .database()
      .ref("projects")
      .on("value", (ds) => {
        const projects = [];
        ds.forEach((x) => {
          projects.push(x.val());
        });
        this.setState({
          projects: projects,
          loaded: true,
        });
      });
  }
  projectContainer(data) {
    return (
      <Link className="project-card" to={`/project/${data.projectId}`}>
        <img src={data.projectIcon} alt="logo" />
        <h4>{data.projectName}</h4>
        <p>{data.projectTitle}</p>
        <img src={data.platformIcon} alt="platform" className="platform-icon" />
      </Link>
    );
  }
  projectsDiv() {
    return (
      <div className="projects-list">
        {this.state.projects.map((data, positon) => {
          return this.projectContainer(data);
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
                marginTop: "0px",
                color: "#729fcf",
              }}
            >
              My Projects
            </h2>
            <div style={{ marginTop: "50px", height: "85%" }}>
              {this.state.loaded === false ? <Loader /> : this.projectsDiv()}
            </div>
          </div>
        }
      />
    );
  }
}
