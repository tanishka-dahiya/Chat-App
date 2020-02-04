import React from "react";
import "./Button.css";

function IconButton(props) {
  const { onClick } = props;

  return (
    <button onClick={onClick} className="Registerbutton">
      Join
    </button>
  );
}

export default IconButton;
