import React from "react";
import "./Container.css";

function Containter({ center, children }) {
  let classNames = ["Container"];

  if (center) {
    classNames.push("Containter--center");
  }
  return <div className={classNames.join("")}>{children}</div>;
}

export default Containter;
