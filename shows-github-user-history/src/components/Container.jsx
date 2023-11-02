import React from "react";
import Input from "./Input";
import { Typography } from "@material-ui/core";

function Container() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            margin: "20px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            fontSize: "45px",
            fontFamily: "Alef"
          }}
        >
          GitHub User History
        </Typography>
        <img
          className="header"
          src={process.env.PUBLIC_URL + "/github_search.png"}
          alt="GitHub Icon"
          style={{
            width: "80px",
          }}
        />
      </div>
      <Input />
      <img
        src={process.env.PUBLIC_URL + "/github_logo.png"}
        alt="GitHub Icon"
        style={{
          width: "120px",
          right: "5px",
          bottom: "5px",
          position: "fixed",
        }}
      />
    </div>
  );
}

export default Container;
