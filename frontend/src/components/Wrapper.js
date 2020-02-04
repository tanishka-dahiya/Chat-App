import React from "react";
import "./Wrapper.css";

function Container(props) {
  return (
    <React.Fragment>
      <h1>Join Our Chatting Group</h1>
      <div className="wraaper">
        <div className="wraaper-Form">{props.Form}</div>
      </div>
    </React.Fragment>
  );
}

export default Container;
