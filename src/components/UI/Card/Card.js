import styles from "./Card.module.css";

// function Card(props) {
const Card = (props) => {
  // const classes = styles.card + " " + props.className;
  // return <div className={classes}>{props.children}</div>;
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
