import styles from "./UserItems.module.css";

const UserItems = (props) => {
  return (
    <div>
      <ul>
        <div className={styles.UserItems}>
          {props.username} {props.age}
        </div>
      </ul>
    </div>
  );
};

export default UserItems;
