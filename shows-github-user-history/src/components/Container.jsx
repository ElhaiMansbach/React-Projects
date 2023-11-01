import React from "react";
import Input from "./Input";
import { Typography } from "@material-ui/core";

function Container() {
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          margin: "20px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          justifyContent: "center",
          fontSize: "40px",
        }}
      >
        GitHub User History
      </Typography>
      <Input />
      <img
        src={process.env.PUBLIC_URL + "/github_icon.png"}
        alt="GitHub Icon"
        style={{
          width: "50px",
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
      />
    </div>
  );
}

export default Container;
