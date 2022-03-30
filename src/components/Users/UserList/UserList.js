import Card from "../../UI/Card/Card";
import UserItems from "./UserItems";
import styles from "./UserItems.module.css";

const UserList = (props) => {
  return (
    <div>
      <Card className={styles.userItems}>
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
