import React, { Component } from "react";
import Splash from "./main-splash/splash";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 4500);
  }
  render() {
    return (
      <div className="main-body">
        {this.state.loaded === false ? <Splash /> : <div></div>}
      </div>
    );
  }
}
