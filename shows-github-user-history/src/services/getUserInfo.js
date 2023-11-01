async function getUserInfo(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
  }
}
export default getUserInfo;
