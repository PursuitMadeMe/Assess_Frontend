import React from "react";
import "./Error.css";

function Error({ error }) {
  return (
    <div className="Error">
      There was an error: uh oh
      <br />
      Error message: {error}
      <br />
      Please Contact User Admin
    </div>
  );
}

export default Error;
