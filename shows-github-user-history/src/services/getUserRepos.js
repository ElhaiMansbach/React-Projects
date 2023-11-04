async function getUserRepos(userName) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    const userRepos = await response.json();
    return userRepos;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
export default getUserRepos;
