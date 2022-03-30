import Card from "../../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div>
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.age} years old.)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
