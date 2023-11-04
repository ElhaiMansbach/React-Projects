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
      if (userData.message === "Not Found" || userData.message[0] === "A") {
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
        />

        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            fontFamily: "Alef",
          }}
        >
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
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body2"
            color="error"
            style={{
              fontSize: "22px",
              textAlign: "center",
              fontFamily: "Alef",
            }}
          >
            {error}
          </Typography>

          <img
            className="rotate-vertical"
            src={src}
            alt="GIF"
            style={{
              width: "270px",
              height: "250px",
              marginTop: "50px",
              borderRadius: "50%",
            }}
          />
        </div>
      )}
    </>
  );
}

export default Input;
