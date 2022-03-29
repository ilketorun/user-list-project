import "./App.css";
import Card from "./components/UI/Card/Card";
import UserForm from "./components/Users/UserForm/UserForm";
import UserList from "./components/Users/UserList/UserList";

function App() {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
