import Tag from "../../UI/Tag";
import Button from "../../UI/Button";
import styles from "./PoolCard.module.css";

const PoolCard = ({
  name,
  handle,
  poolStatus,
  poolPeriod,
  paymentStatus,
  button,
}) => {
  return (
    <div className={styles.pool__card}>
      <div className={styles.pool__overview}>
        <div className={styles.pool__image}></div>
        <div className={styles.pool__overview__details}>
          <div className={styles.pool__overview__name}>{name}</div>
          <div className={styles.pool__overview__handle}>{handle}</div>
          <div className={styles.btn__flex}>
            <Tag className={"tag__primary"}>{poolStatus}</Tag>
            <Tag className={"tag__primary"}>{poolPeriod}</Tag>
          </div>
        </div>
      </div>

      <div className={styles.pool__overview__data}>
        <div className={styles.data__flex}>
          <div>Borrow Rate</div>
          <div>{paymentStatus.borrowRate}</div>
        </div>
        <div className={styles.data__flex}>
          <div>Borrowed Amount</div>
          <div>{paymentStatus.borrowedAmount}</div>
        </div>
        <div className={styles.data__flex}>
          <div>Payment Status</div>
          <div>{paymentStatus.nextPayment}</div>
        </div>
        <div className={styles.data__flex}>
          <div>Repayment Progress</div>
          <div>{paymentStatus.repaymentProgress}</div>
        </div>
      </div>
      <Button className={"pool__btn"}>{button}</Button>
    </div>
  );
};
export default PoolCard;
