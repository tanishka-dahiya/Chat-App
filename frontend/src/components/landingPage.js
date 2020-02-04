import React, { useState } from "react";
import "../css/landingPage.css";
import IconButton from "./Button";

const Appp = props => {
  const [classNameForAnimation, setClass] = useState("");
  const handleFocus = () => {
    setClass("password");
  };
  const handleBlur = () => {
    console.log("gg");
    setClass("");
  };
  return (
    <React.Fragment>
      <div className={`owl ${classNameForAnimation}`}>
        <div className={`hand  ${classNameForAnimation}`}></div>
        <div className={`hand hand-r ${classNameForAnimation}`}></div>
        <div className={`arms ${classNameForAnimation}`}>
          <div className={`arm ${classNameForAnimation}`}></div>
          <div className={`arm arm-r ${classNameForAnimation}`}></div>
        </div>
      </div>
      <div className={`form ${classNameForAnimation}`}>
        <div className={`control ${classNameForAnimation}`}>
          <label
            for="email"
            className={`fa fa-envelope ${classNameForAnimation}`}
          ></label>
          <input
            id="email"
            placeholder="Name"
            type="email password"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={props.onChange}
          ></input>
        </div>
      </div>
      <IconButton onClick={props.onSubmit} />
    </React.Fragment>
  );
};
export default Appp;
