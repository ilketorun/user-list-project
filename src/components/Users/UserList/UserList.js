import { useState } from "react";
import Card from "../../UI/Card/Card";
import UserItems from "./UserItems";

const UserList = (props) => {
  return (
    <div>
      <Card>
        {props.users.map((users) => (
          <UserItems key={users.id} username={users.username} age={users.age} />
        ))}
      </Card>
    </div>
  );
};

export default UserList;
