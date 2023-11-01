import React from "react";
import { useState } from "react";
import List from "./List";
import Info from "./Info";
import { TextField, Button, Typography } from "@material-ui/core";
import getUserInfo from "../services/getUserInfo";
import getUserRepos from "../services/getUserRepos";
import gifSrc from "../gif/Gifs.js";

function Input() {
  const [userInfo, setUserInfo] = useState();
  const [userRepos, setUserRepos] = useState();
  const [error, setError] = useState(null);
  const [src, setSrc] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setSrc(gifSrc[Math.floor(Math.random() * gifSrc.length)])
    const username = event.target.elements[0].value;

    try {
      const userData = await getUserInfo(username);
      if (userData.message === "Not Found") {
        setError(`User "${username}" not found 😵 - please try again.`);
      } else {
        setUserInfo(userData);
        const repos = await getUserRepos(username);
        setUserRepos(repos);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching user data.");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter GitHub username"
          variant="outlined"
          style={{ width: "300px", marginRight: "20px" }}
          error={Boolean(error)}
          // helperText={error}
        />

        <Button
          type="submit"
          variant="contained"
          style={{
            position: "absolut",
            backgroundColor: "#000000",
            color: "#ffffff",
          }}
        >
          Search
        </Button>
      </form>

      {userRepos && !error && (
        <>
          <Info userInfo={userInfo} roposNum={userRepos.length} />
          <List userRepos={userRepos} />
        </>
      )}

      {error && (
        <Typography
          variant="body2"
          color="error"
          style={{ marginTop: "20px", fontSize: "22px", textAlign: "center" }}
        >
          {error}
        </Typography>
      )}
      {error && (
        <div style={{ marginTop: "70px"}}>
          <img
            src={src}
            alt="GIF Image"
            width="250"
            height="250"
            style={{ borderRadius: "50%" }}
          />
        </div>
      )}
    </>
  );
}

export default Input;
