import { useState } from "react";
import "./App.css";
import UserInput from "./components/Users/UserInput/UserInput";
import UserList from "./components/Users/UserList/UserList";

const INITIAL_USERS = [
  {
    id: "Ahmet12",
    username: "Ahmet",
    age: 12,
  },
  {
    id: "Mehmet42",
    username: "Mehmet",
    age: 42,
  },
];

function App() {
  const [users, setUsers] = useState(INITIAL_USERS);

  const newUserHandler = (userData) => {
    setUsers(userData);
  };

  return (
    <div>
      <UserInput newUser={newUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
