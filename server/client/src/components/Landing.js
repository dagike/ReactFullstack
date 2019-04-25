import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Survey!</h1>
      <p> Collect feedback from your users</p>
      <Link to="/surveys" className="btn">
        Dashboard
      </Link>
    </div>
  );
};
