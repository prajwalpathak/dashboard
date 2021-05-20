import OverviewCard from "./OverviewCard";
import styles from "./Overview.module.css";
import Button from "../UI/Button";

const Overview = ({ data, title, hasButton }) => {
  const overviewList = data.map((dataPoint) => (
    <OverviewCard value={dataPoint.value} title={dataPoint.title} />
  ));

  return (
    <div className={styles.overview__section}>
      <div className={styles.overview__title}>{title}</div>
      <div className={styles.overview__cards}>{overviewList}</div>
      {hasButton && <Button>View More</Button>}
    </div>
  );
};
export default Overview;
