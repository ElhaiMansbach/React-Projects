import React from "react";
import { useState } from "react";
import List from "./List";
import { TextField, Button, Typography } from "@material-ui/core";
import getUserInfo from "../services/getUserInfo";
import getUserRepos from "../services/getUserRepos";

function Input() {
  const [userInfo, setUserInfo] = useState();
  const [userRepos, setUserRepos] = useState();
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null); // Reset any previous errors
    const username = event.target.elements[0].value;

    try {
      const userData = await getUserInfo(username);
      console.log(userData.message.length);
      if (userData.message === "Not Found" || userData.message.length === 162) {
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

        {userRepos && !error && <List userRepos={userRepos} />}
      </form>

      {error && (
        <Typography
          variant="body2"
          color="error"
          style={{ marginTop: "20px", fontSize: "22px", textAlign: "center" }}
        >
          {error}
        </Typography>
      )}
    </>
  );
}

export default Input;
