import React, { Component } from "react";
import { FadeIn } from "../../../assets/anim/fade-in/anim";
import "./app-socials.css";
export default class Socials extends Component {
  openGit = () => {
    window.open("https://github.com/Mugambi-Ian", "_blank");
  };
  openInstagram = () => {
    window.open("https://www.instagram.com/mugambi_bruv/", "_blank");
  };
  openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/ian-mugambi-65893917a/", "_blank");
  };
  openMail = () => {
    window.open("mailto:linksian63@gmail.com", "_blank");
  };
  openWhatsapp = () => {
    window.open("https://wa.me/+254798098595", "_blank");
  };
  socialsDiv() {
    return (
      <div className="socials-list">
        <div
          className="social-card"
          onClick={() => {
            this.openGit();
          }}
        >
          <img
            src={require("../../../assets/icons/social/ic-github.svg")}
            alt="logo"
          />
          <h4>Github</h4>
        </div>
        <div
          className="social-card"
          onClick={() => {
            this.openLinkedIn();
          }}
        >
          <img
            src={require("../../../assets/icons/social/ic-linkedin.svg")}
            alt="logo"
          />
          <h4>Linked In</h4>
        </div>
        <div
          className="social-card"
          onClick={() => {
            this.openMail();
          }}
        >
          <img
            src={require("../../../assets/icons/social/ic-mail.svg")}
            alt="logo"
          />
          <h4>My Email</h4>
        </div>
        <div
          className="social-card"
          onClick={() => {
            this.openInstagram();
          }}
        >
          <img
            src={require("../../../assets/icons/social/ic-instagram.svg")}
            alt="logo"
          />
          <h4>Instagram</h4>
        </div>
        <div
          className="social-card"
          onClick={() => {
            this.openWhatsapp();
          }}
        >
          <img
            src={require("../../../assets/icons/social/ic-whatsapp.svg")}
            alt="logo"
          />
          <h4>Whatsapp</h4>
        </div>
        <div className="social-card">
          <img
            src={require("../../../assets/icons/social/ic-number.svg")}
            alt="logo"
          />
          <h4>+254 798 098595</h4>
        </div>
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
                marginTop: "0px",
                top: "5px",
                color: "#729fcf",
              }}
            >
              My Socials
            </h2>
            <div style={{ marginTop: "50px", height: "85%" }}>
              {this.socialsDiv()}
            </div>
          </div>
        }
      />
    );
  }
}
