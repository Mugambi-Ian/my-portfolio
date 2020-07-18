import React, { Component } from "react";
import "./main.css";
export default class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastLive: true,
    };
  }
  componentDidMount() {
    if (this.props.timed === true) {
      setTimeout(() => {
        this.setState({
          toastLive: false,
        });
      }, 2500);
    }
  }
  closeToast = () => {
    setTimeout(() => {
      this.props.closeToast();
    }, 450);
  };

  render() {
    if (this.state.toastLive === true) {
      return (
        <div className="toast">
          <div className="body">
            <div className="toast-body slide-up">
              <h4>{this.props.message}</h4>
            </div>
          </div>
          <div className="space" />
        </div>
      );
    } else if (this.state.toastLive === false) {
      return (
        <div className="toast">
          <div className="body">
            <div className="toast-body slide-out">
              <h4>{this.props.message}</h4>
            </div>
          </div>
          <div className="space" />
          {this.closeToast()}
        </div>
      );
    }
  }
}
export const toast = {
  showToast: false,
  toastMessage: "",
  toastTimed: false,
};
