import { useState } from "react";
import UserForm from "./components/Users/UserInput/UserForm";
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
  const [users, setUsers] = useState(INITIAL_USERS);

  const newUserHandler = (userData) => {
    console.log(userData);
    const newUserArray = [
      ...users,
      {
        id: userData.id,
        username: userData.username,
        age: userData.age,
      },
    ];

    setUsers(newUserArray);
  };

  return (
    <div>
      <UserForm addUser={newUserHandler} />
      <UserList userListItems={users} />
    </div>
  );
}

export default App;
