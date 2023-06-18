import styles from "./styles.module.css";
import Button from "../Button";
import Description from "../Description";

export default function Card({ title, posterImg }) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <Description />
        <Button />
      </div>
    </div>
  );
}
