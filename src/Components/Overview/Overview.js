import OverviewCard from "./OverviewCard";
import styles from "./Overview.module.css";
import Button from "../../UI/Button";

const Overview = ({ data, title, hasButton, btnClass, size }) => {
  const overviewList = data.map((dataPoint) => (
    <OverviewCard value={dataPoint.value} title={dataPoint.title} size={size} />
  ));

  return (
    <section className={styles.overview__section}>
      <div className={styles.overview__title}>{title}</div>
      <article className={styles.overview__cards}>{overviewList}</article>
      {hasButton && <Button className={btnClass}>View More</Button>}
    </section>
  );
};
export default Overview;
