import { useState } from "react";
import UserForm from "./components/Users/UserForm/UserForm";
import UserList from "./components/Users/UserList/UserList";

const INITIAL_USERS = [
  {
    id: "Masego(Micah Davis)28",
    username: "Masego(Micah Davis)",
    age: 28,
  },
  {
    id: "Elley Duhe30",
    username: "Elley Duhé",
    age: 30,
  },
];

function App() {
  const [userList, setUserList] = useState(INITIAL_USERS);

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          id: Math.random().toString(),
          username: username,
          age: age,
        },
      ];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
