import React from "react";
import "./Wrapper.css";

function Container(props) {
  return (
    <React.Fragment>
      <div className="wraaper">
        <div className="wraaper-Form">{props.Form}</div>
      </div>
    </React.Fragment>
  );
}

export default Container;
