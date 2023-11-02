import React from "react";
import { Typography } from "@material-ui/core";
import "../css/Info.css";

function Info(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "25px",
      }}
    >
      <Typography style={{ fontFamily: "Alef", fontSize: "30px", fontWeight: "bold" }}>
        Hello you👋{" "}
      </Typography>

      <Typography style={{ fontFamily: "Alef",fontSize: "22px" }}>
        The user <strong>{props.userInfo.name}</strong> has {props.roposNum}{" "}
        public repositories.
      </Typography>
      <img
        className="rotate"
        alt="avatar"
        src={props.userInfo.avatar_url}
        width="120px"
        style={{ marginTop: "20px", borderRadius: "50%" }}
      />
    </div>
  );
}

export default Info;
