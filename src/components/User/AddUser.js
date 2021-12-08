import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    //here i am checking if user enter nothing
    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: 'Please enter a valid name  (non-empty value).'

      });
      return;
    }

    // here i checking if user entered minus value
    if (+enteredUserAge < 1 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Age",
        message: 'Please enter a valid Age  ( >0 ).'

      });
      return;
    }

    props.onAddUser(enteredUsername, enteredUserAge);
    setEnteredUsername("");
    setEnteredUserAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={enteredUsername}
            id="username"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">UserAge</label>
          <input
            type="number"
            id="age"
            value={enteredUserAge}
            onChange={userageChangeHandler}
          />
          <Button type="submit" onClick={errorHandler}   > Add User</Button>{" "}
          {/*custom button component with complete dynamic item */}
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
