import Button from "../../UI/Button";
import styles from "./ImportantCard.module.css";

const ImportantCard = ({ name, handle, daysLeft }) => {
  return (
    <div className={styles.important__card}>
      <div className={styles.important__profile}>
        <div className={styles.important__image}></div>
        <div className={styles.important__details}>
          <div className={styles.important__name}>{name}</div>
          <div className={styles.important__handle}>{handle}</div>
          <div className={styles.important__days}>
            Vote ends in {daysLeft} days
          </div>
        </div>
      </div>
      <div>
        <Button className="important__btn">Vote</Button>
        <Button className="important__btn">Dismiss</Button>
      </div>
    </div>
  );
};
export default ImportantCard;
