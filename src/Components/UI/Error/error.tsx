// React
import { FC } from "react";
// Styles
import s from "./error.module.scss";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
interface IError {
  error: string;
}

const Error: FC<IError> = ({ error }) => {
  return (
    <section className={s.error}>
      <FontAwesomeIcon icon={faBug} width={20} />
      <p>{error}</p>
    </section>
  );
};

export default Error;
