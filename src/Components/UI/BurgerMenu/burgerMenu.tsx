// React
import { FC, SetStateAction, useEffect } from "react";
// Styles
import s from "./burger.module.scss";
interface IBurger {
  isBurgerActive: boolean;
  isToggleMenuActive: boolean;
  setBurger: React.Dispatch<SetStateAction<boolean>>;
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurger> = ({
  isBurgerActive,
  setBurger,
  setToggleMenu,
  isToggleMenuActive,
}) => {
  useEffect(() => {
    if (isBurgerActive) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
  }, [isBurgerActive]);
  return (
    <button
      id={s.burger}
      onClick={() => {
        setBurger(!isBurgerActive), setToggleMenu(!isToggleMenuActive);
      }}
      className={`hamburger hamburger--elastic ${
        isBurgerActive ? "is-active" : ""
      }`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default BurgerMenu;
