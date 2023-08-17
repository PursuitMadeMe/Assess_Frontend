import React from "react";
import "./GridLayout.css";

function GridLayout({ children }) {
  let classNames = ["GridLayout"];
  return <div className={classNames.join("")}>{children}</div>;
}

export default GridLayout;
