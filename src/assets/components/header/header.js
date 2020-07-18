/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import "./header.css";
import { ic_logo, ic_shop, ic_logoS } from "../../icons/index";
import { Dropdown } from "semantic-ui-react";
const categoryOptions = [
  {
    key: "af",
    value: "af",
    image: { avatar: true, src: ic_logo },
    text: "Category 1",
  },
  {
    key: "af",
    value: "af",
    image: { avatar: true, src: ic_logo },
    text: "Category 1",
  },
  {
    key: "af",
    value: "af",
    image: { avatar: true, src: ic_logo },
    text: "Category 2",
  },
  {
    key: "af",
    value: "af",
    image: { avatar: true, src: ic_logo },
    text: "Category 3",
  },
  {
    key: "af",
    value: "af",
    image: { avatar: true, src: ic_logo },
    text: "Category 4",
  },
  {
    key: "af",
    value: "af",
    image: { avatar: true, src: ic_logo },
    text: "Category 5",
  },
];
export default class Header extends Component {
  render() {
    return (
      <div className="header-body">
        <div
          style={{
            display: "flex",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            margin: "auto",
            marginLeft: "20px",
            backgroundColor: "#fff",
            borderRadius: "30px",
          }}
        >
          <img src={ic_logoS} alt="logo" className="header-clickable" />
        </div>
        <div className="large">
          <div className="search-bar">
            <Dropdown
              placeholder="All"
              fluid
              search
              selection
              options={categoryOptions}
              className="category-selector"
            />
            <div className="search-field">
              <input
                className="search-box"
                placeholder="Search Our Inventory"
              />
            </div>
            <div className="search-btn">
              <p style={{ margin: "auto", fontWeight: "bold", color: "#fff" }}>
                Search
              </p>
            </div>
          </div>
          <div className="header-cart">
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
                paddingLeft: "10px",
                paddingRight: "20px",
                borderRadius: "30px",
              }}
            >
              <img style={{ width: "30px" }} alt="cart" src={ic_shop} />
              <h2
                style={{
                  margin: "auto",
                  marginLeft: "20px",
                  color: "#639834",
                }}
              >
                0
              </h2>
            </div>
          </div>
          <div className="header-btn">
            <p style={{ margin: "auto", fontWeight: "bold", color: "#fff" }}>
              My Account
            </p>
          </div>
        </div>
      </div>
    );
  }
}
