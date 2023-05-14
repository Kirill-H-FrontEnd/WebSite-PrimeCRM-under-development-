import { FC } from "react";
// Styles
import s from "./toggleMenu.module.scss";
import Image from "next/image";
import { Jost } from "next/font/google";
import Link from "next/link";

const font_logo = Jost({
  subsets: ["latin"],
  weight: ["700"],
});
interface IToggleMenu {
  isToggleMenuActive: boolean;
}

const ToggleMenu: FC<IToggleMenu> = ({ isToggleMenuActive }) => {
  return (
    <section
      className={`${s.toggleMenu_wrapper} ${
        isToggleMenuActive ? s.active : ""
      }`}
    >
      <Link href={"/"} className={s.logo} style={font_logo.style}>
        <Image src={"/Logo.svg"} alt="ToggleMenuLogo" width={30} height={30} />
        <span>PrimeCRM</span>
      </Link>
      <nav></nav>
    </section>
  );
};

export default ToggleMenu;
