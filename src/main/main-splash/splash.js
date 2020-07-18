import React, { Component } from "react";
import "./splash.css";
import { FadeIn } from "../../assets/anim/fade-in/anim";
import { FadeOut } from "../../assets/anim";
import Background from "./splash-background/splash-background";

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      closeItDown: false,
      redirect: false,
    };
  }
  componentDidMount() {
    this.pageLoader();
  }
  pageLoader() {
    setTimeout(() => {
      this.setState({ closeItDown: true });
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 500);
    }, 4000);
  }
  pageIn = (<FadeIn time="1.5s" component={this.frameworks()} />);
  pageOut = (<FadeOut time=".5s" component={this.frameworks()} />);
  frameworks() {
    return (
      <div className="splash-body">
        {this.cardLogoBox(
          require("../../assets/icons/frameworks/ic-android.png")
        )}
        {this.cardLogoBox(
          require("../../assets/icons/frameworks/ic-javascript.png")
        )}
        {this.cardLogoBox(require("../../assets/icons/frameworks/ic-node.png"))}
        {this.cardLogoBox(
          require("../../assets/icons/frameworks/ic-react.svg")
        )}
        {this.cardLogoBox(
          require("../../assets/icons/frameworks/ic-type-script.png")
        )}
        {this.cardLogoBox(
          require("../../assets/icons/frameworks/ic_electron.svg")
        )}
        {this.cardLogoBox(
          require("../../assets/icons/frameworks/ic_firebase.png")
        )}
        {this.cardLogoBox(require("../../assets/icons/frameworks/ic_java.png"))}
      </div>
    );
  }
  cardLogoBox(logo) {
    return <img src={logo} alt="logo" className="splash-logo" />;
  }
  content() {
    if (this.state.closeItDown !== true) {
      return this.pageIn;
    } else if (this.state.closeItDown === true) {
      return this.pageOut;
    }
  }
  render() {
    return (
      <div>
        <Background />
        {this.content()}
      </div>
    );
  }
}
