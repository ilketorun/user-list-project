import styles from "./Card.module.css";

const Card = (props) => {
  return <div className={`${styles.card}`}>{props.childeren}</div>;
};

export default Card;
