import { FC } from "react";
// Styles
import s from "./loader.module.scss";
interface ILoader {}

const Loader: FC = ({}) => {
  return (
    <div className={s.loader}>
      <span className={s.bar}></span>
      <span className={s.bar}></span>
      <span className={s.bar}></span>
    </div>
  );
};

export default Loader;
