import Card from "../../UI/Card/Card";
import UserItems from "./UserItems";

const UserList = (props) => {
  return (
    <div>
      <Card>
        {props.userListItems.map((userInfo) => (
          <UserItems
            key={userInfo.id}
            username={userInfo.username}
            age={userInfo.age}
          />
        ))}
      </Card>
    </div>
  );
};

export default UserList;
