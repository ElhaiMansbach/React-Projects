import React from "react";
import Input from "./Input";
import { Typography } from "@material-ui/core";
import "../css/Container.css";

function Container() {
  return (
    <div>
      <img
        className="img-left-logo"
        src={process.env.PUBLIC_URL + "/git.png"}
        alt="GitHub cat"
      />
      <div className="container-title">
        <Typography className="title">GitHub User History</Typography>
        <img
          className="image-title"
          src={process.env.PUBLIC_URL + "/github_search.png"}
          alt="GitHub Icon"
        />
      </div>
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
