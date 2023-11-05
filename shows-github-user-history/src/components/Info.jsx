import React from "react";
import { Typography } from "@material-ui/core";
import "../css/Info.css";

function Info(props) {
  return (
    <div className="info-container">
      <Typography className="hello">Hello you👋 </Typography>

      <Typography className="repos-number">
        The user <strong>{props.userInfo.name}</strong> has {props.roposNum}{" "}
        public repositories.
      </Typography>
      <img
        className="rotate"
        alt="avatar"
        src={props.userInfo.avatar_url}
      />
    </div>
  );
}

export default Info;
