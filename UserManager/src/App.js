import React, {useState, Fragment} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  const removeUserHandler = () => {
    setUsersList([])
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} removeUser={removeUserHandler}/>
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
