import React, { Component } from "react";
import "./main-app.css";
import { FadeIn } from "../../assets/anim/index";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Projects from "./app-projects/app-projects";
import Frameworks from "./app-frameworks/app-frameworks";
import Socials from "./app-socials/app-socials";
import About from "./app-about/app-about";
import Libraries from "./app-libraries/app-libraries";
import { ProjectDetails } from "./app-projects/project-details/project-details";
export default class App extends Component {
  constructor() {
    super();
    this.state = { smallScreenMenu: false };
  }
  componentDidMount() {
    const mediaQ = window.matchMedia("(min-width: 600px)");
    mediaQ.addEventListener("change", (x) => {
      if (x.matches) {
        this.setState({ smallScreenMenu: false });
      }
    });
  }
  navigator = (
    <>
      <h1
        className="app-header"
        style={{
          marginLeft: "25px",
          marginTop: "5px",
          marginBottom: "5px",
          fontWeight: "600",
          color: "#729fcf",
        }}
      >
        My Portfolio
      </h1>
      <img
        src={require("../../assets/icons/resources/me.jpg")}
        className="me-img-container"
        alt="me"
      />
      <Link
        className="home-btn"
        to="/projects"
        onClick={() => {
          this.setState({ smallScreenMenu: false });
        }}
      >
        <h4>Projects</h4>
      </Link>
      <Link
        className="home-btn"
        to="/libraries"
        onClick={() => {
          this.setState({ smallScreenMenu: false });
        }}
      >
        <h4>Libraries</h4>
      </Link>
      <Link
        className="home-btn"
        to="/frameworks"
        onClick={() => {
          this.setState({ smallScreenMenu: false });
        }}
      >
        <h4>Languages and Frameworks</h4>
      </Link>
      <Link
        className="home-btn"
        to="/about"
        onClick={() => {
          this.setState({ smallScreenMenu: false });
        }}
      >
        <h4>About Me</h4>
      </Link>
      <Link
        className="home-btn"
        to="/reachOut"
        onClick={() => {
          this.setState({ smallScreenMenu: false });
        }}
      >
        <h4>My Socials</h4>
      </Link>
    </>
  );
  render() {
    return (
      <FadeIn
        time=".8s"
        component={
          <Router>
            <div className="app-body">
              <div className="large-nav-bar">{this.navigator}</div>
              <div
                className="small-screen-nav-btn"
                onClick={() => {
                  this.setState({
                    smallScreenMenu: !this.state.smallScreenMenu,
                  });
                }}
              >
                <img
                  alt="logo"
                  src={require("../../assets/icons/resources/bars.svg")}
                />
              </div>
              {this.state.smallScreenMenu === true ? (
                <FadeIn
                  time=".3s"
                  component={
                    <div className="small-screen-menu">{this.navigator}</div>
                  }
                />
              ) : (
                <Switch>
                  <Route path={["/", "/projects"]} exact>
                    <Projects />
                  </Route>
                  <Route path="/frameworks" exact>
                    <Frameworks />
                  </Route>
                  <Route path="/libraries" exact>
                    <Libraries />
                  </Route>
                  <Route path="/reachOut" exact>
                    <Socials />
                  </Route>
                  <Route path="/about" exact>
                    <About />
                  </Route>
                  <Route path="/project/:id" exact>
                    <ProjectDetails />
                  </Route>
                </Switch>
              )}
            </div>
          </Router>
        }
      />
    );
  }
}
