import React, { Component } from "react";
import "../css//Header.css";
import LandingPage from "./landingPage";
import Wrapper from "./Wrapper";

const Header = props => {
  return (
    <div className="Header">
      <div className="Header-background"></div>
      <div className="Header-content">
        <div className="Header-hero">
          <h2> Join Our Chatting Group</h2>
          <p>Get Connected to the Whole World.</p>
        </div>
        <div className="Header-visuals">
          {" "}
          <div className="Container">
            <Wrapper
              Form={
                <LandingPage
                  onChange={props.handleNameChange}
                  onSubmit={props.handleNameSubmit}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
