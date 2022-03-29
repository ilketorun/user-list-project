import styles from "./UserForm.module.css";

const UserForm = (props) => {
  return (
    <form className={`${styles.form_control}`}>
      <label>Username</label>
      <input type="text"></input>
      <label>Age (Years)</label>
      <input ty></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
