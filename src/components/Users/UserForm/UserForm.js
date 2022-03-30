import { useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const UserForm = (props) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setenteredUserName("");
    setenteredAge("");

    event.preventDefault();
  };

  return (
    <Card className={styles.form_control}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUserName}
          id="username"
          type="text"
          placeholder="Type your username"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          placeholder="Type your age"
          min="1"
          step="1"
          max="70"
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
