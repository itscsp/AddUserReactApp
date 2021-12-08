import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  let isData = false;

  if (props.users.length > 0) {
    isData = true;
  }

  return (
    <div>
      {/* Here i am checking if there is any data */ }
      {isData && (
        <Card className={classes.users}>
          <ul>
            {props.users.map((user, index) => (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>
        </Card>
      )}
      ;
    </div>
  );
};

export default UserList;
