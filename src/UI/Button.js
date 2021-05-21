import style from "./Button.module.css";

const Button = ({ className, children }) => {
  return <button className={style[`${className}`]}>{children}</button>;
};
export default Button;
