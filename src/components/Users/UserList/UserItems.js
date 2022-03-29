import { useState } from "react";

const UserItems = (props) => {
  return (
    <div>
      <ul>
        <div>
          {props.username} {props.age}
        </div>
      </ul>
    </div>
  );
};

export default UserItems;
