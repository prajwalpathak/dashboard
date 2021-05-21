import styles from "./OverviewCard.module.css";

const OverviewCard = ({ value, title, size }) => {
  return (
    <div className={styles[`overview__card__${size}`]}>
      <div>{value}</div>
      <div>{title}</div>
    </div>
  );
};
export default OverviewCard;
