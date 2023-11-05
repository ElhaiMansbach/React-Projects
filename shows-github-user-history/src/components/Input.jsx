import React, { useState, useEffect } from "react";
import Table from "./Table";
import Info from "./Info";
import Progress from "./Progress";
import { TextField, Button, Typography } from "@material-ui/core";
import getUserInfo from "../services/getUserInfo";
import getUserRepos from "../services/getUserRepos";
import gifSrc from "../gif/Gifs.js";
import "../css/Input.css";

function Input() {
  const [userInfo, setUserInfo] = useState();
  const [userRepos, setUserRepos] = useState();
  const [error, setError] = useState(null);
  const [src, setSrc] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setSrc(gifSrc[Math.floor(Math.random() * gifSrc.length)]);
    const username = event.target.elements[0].value;

    try {
      setShowLoading(false);
      const userData = await getUserInfo(username);
      if (userData.message === "Not Found") {
        setError(`User "${username}" not found 😵 - please try again.`);
      } else if (
        userData.message &&
        userData.message.slice(0, 23) === "API rate limit exceeded"
      ) {
        setError("API rate limit exceeded, please come back later 🕐.");
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

  useEffect(() => {
    if (userRepos) {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [userRepos]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          className="input"
          label="Enter GitHub username"
          variant="outlined"
          error={Boolean(error)}
        />

        <Button className="button-submit" type="submit" variant="contained">
          Search
        </Button>
      </form>

      {userRepos && !error && showLoading && (
        <>
          <Info userInfo={userInfo} roposNum={userRepos.length} />
          <Table userRepos={userRepos} />
        </>
      )}

      {userRepos && !error && !showLoading && <Progress />}

      {error && (
        <div className="container-error-gif">
          <Typography className="error" variant="body2" color="error">
            {error}
          </Typography>

          <img className="rotate-vertical" src={src} alt="GIF" />
        </div>
      )}
    </>
  );
}

export default Input;
