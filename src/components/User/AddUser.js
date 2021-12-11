import React, { useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";


const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const enterUsername = nameInputRef.current.value;
    const enterUserAge = ageInputRef.current.value;

    //here i am checking if user enter nothing
    if (enterUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: 'Please enter a valid name  (non-empty value).'

      });
      return;
    }

    // here i checking if user entered minus value
    if (+enterUserAge < 1 || enterUserAge.trim().length === 0) {
      setError({
        title: "Invalid Age",
        message: 'Please enter a valid Age  ( >0 ).'

      });
      return;
    }

    props.onAddUser(enterUsername, enterUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

  };



  const errorHandler = () => {
    setError(null);
    }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} >
          <label htmlFor="username">Username</label>
          <input
            type="text"

            id="username"

            ref={nameInputRef}
          />
          <label htmlFor="age">UserAge</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit" onClick={errorHandler}   > Add User</Button>{" "}
          {/*custom button component with complete dynamic item */}
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
