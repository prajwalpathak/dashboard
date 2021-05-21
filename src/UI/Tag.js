import styles from "./Tag.module.css";

const Tag = ({ children, className }) => {
  const tagMap = {
    grace: "tag__red",
    collecting: "tag__yellow",
    closed: "tag__transparent",
    open: "tag__default",
  };

  return <div className={styles[`${className}`]}>{children}</div>;
};
export default Tag;
