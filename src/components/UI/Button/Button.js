import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button type={props.type} className={styles.button}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;
