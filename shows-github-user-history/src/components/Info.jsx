import React from "react";
import { Typography } from "@material-ui/core";

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
      <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
        Hello you👋{" "}
      </Typography>

      <div>
        <img
          src={props.userInfo.avatar_url}
          width="100px"
          style={{ position: "absolute", left: "10px", top: "8px", zIndex: "-1", borderRadius: "50%" }}
        />
        <Typography style={{ fontSize: "22px" }}>
          The user <strong>{props.userInfo.name}</strong> has {props.roposNum}{" "}
          public repositories.
        </Typography>
      </div>
    </div>
  );
}

export default Info;
