import Card from "../UI/Card";
import styles from "./OverviewCard.module.css";

const OverviewCard = ({ value, title }) => {
  return (
    <div className={styles.overview__card}>
      <div>{value}</div>
      <div>{title}</div>
    </div>
  );
};
export default OverviewCard;
