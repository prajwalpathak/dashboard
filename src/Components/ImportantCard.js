import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ImportantCard.module.css";

const ImportantCard = ({ name, handle, daysLeft }) => {
  return (
    <div className={styles["important-section__card"]}>
      <div className={styles["important-section__profile"]}>
        <div className={styles["profile-image"]}></div>
        <div>
          <div>{name}</div>
          <div>{handle}</div>
          <div>Vote ends in {daysLeft} days</div>
        </div>
      </div>
      <div>
        <Button>Vote</Button>
        <Button>Dismiss</Button>
      </div>
    </div>
  );
};
export default ImportantCard;
