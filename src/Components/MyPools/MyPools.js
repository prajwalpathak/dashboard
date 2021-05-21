import PoolCard from "./PoolCard";
import styles from "./MyPool.module.css";

const MyPools = ({ data }) => {
  const myPoolsList = data.map((dataPoint) => (
    <PoolCard
      name={dataPoint.name}
      handle={dataPoint.handle}
      poolStatus={dataPoint.poolStatus}
      poolPeriod={dataPoint.poolPeriod}
      paymentStatus={dataPoint.paymentStatus}
      button={dataPoint.button}
    />
  ));

  return (
    <section className={styles.my__pool}>
      <div>
        <nav>
          <div>All Pools</div>
          <div>Borrow</div>
          <div>Lend</div>
        </nav>
        <>
          <input />
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
          </select>
        </>
      </div>
      <article className={styles.pool_cards}>{myPoolsList}</article>
    </section>
  );
};
export default MyPools;
