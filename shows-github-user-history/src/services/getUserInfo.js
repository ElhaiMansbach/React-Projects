async function getUserInfo(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log(error);
    return "Not Found";
  }
}
export default getUserInfo;
