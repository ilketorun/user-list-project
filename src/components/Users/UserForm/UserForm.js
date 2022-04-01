import React, { useState, Fragment } from "react";
// import { useRef } from "react";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModel from "../../UI/ErrorModal/ErrorModel";

const UserForm = (props) => {
  // These are Ref hooks
  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Refs can be used to get the final value of a field
    // if we want to reset the field we have to play with the actual DOM,
    // so it is a unwanted case since we want React to do that for us
    // console.log(nameInputRef);
    // console.log("nameInputRef: " + nameInputRef.current.value);
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid username",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setenteredUserName("");
    setenteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.form_control}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUserName}
            id="username"
            type="text"
            placeholder="Type your username"
            onChange={usernameChangeHandler}
            // ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            placeholder="Type your age"
            step="1"
            onChange={ageChangeHandler}
            // ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserForm;
