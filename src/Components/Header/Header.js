import styles from "./Header.module.css";

const Header = ({ title, tabs }) => {
  const navButtons = tabs.map((tab) => (
    <div className={styles["header__tab"]}>{tab}</div>
  ));

  return (
    <header className={styles.header}>
      <div className={styles["header__title"]}>{title}</div>
      <nav className={styles["header__tabs"]}>{navButtons}</nav>
    </header>
  );
};
export default Header;
