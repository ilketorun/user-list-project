import styles from "./UserItems.module.css";

const UserItems = (props) => {
  return (
    <div>
      <ul>
        <div className={styles.userItems}>
          <div>{props.username}</div>
          <div>{props.age}</div>
        </div>
      </ul>
    </div>
  );
};

export default UserItems;
