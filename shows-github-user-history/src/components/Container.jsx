import React from "react";
import Input from "./Input";
import { Typography } from "@material-ui/core";
import "../css/Container.css";

function Container() {
  return (
    <div className="page-container">
      <img
        className="img-left-logo"
        src={process.env.PUBLIC_URL + "/git.png"}
        alt="GitHub cat"
      />
      <Typography className="title">GitHub User History</Typography>
      <Input />
      <img
        className="img-right-logo"
        src={process.env.PUBLIC_URL + "/github_logo.png"}
        alt="GitHub Icon"
      />
    </div>
  );
}

export default Container;
