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
          color: "#000000",
          textAlign: "center",
        }}
      >
        GitHub User History
      </Typography>
      <Input />
    </div>
  );
}

export default Container;
