import { useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button/Button";

const UserForm = (props) => {
  const [username, setUsername] = useState();
  const [age, setAge] = useState();

  const userData = {
    username: "dummyname",
    age: 1,
    id: "id",
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    userData.username = username;
    userData.age = age;
    userData.id = Math.random();

    props.submited(userData);

    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={`${styles.form_control}`}>
      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Type your username"
            onChange={usernameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            placeholder="Type your age"
            min="1"
            step="1"
            max="70"
            onChange={ageChangeHandler}
          ></input>
        </div>
        <div>
          <Button type="submit" buttonText="Add User"></Button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
