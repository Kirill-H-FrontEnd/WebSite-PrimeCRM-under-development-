import { FC } from "react";
// Styles
import s from "./toggleMenu.module.scss";
import Image from "next/image";
import { Jost } from "next/font/google";
import Link from "next/link";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faThumbsUp,
  faChessBishop,
  faBookmark,
  faMoneyBill1,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const font = Jost({
  subsets: ["latin"],
  weight: ["700"],
});
interface IToggleMenu {
  isToggleMenuActive: boolean;
}

const ToggleMenu: FC<IToggleMenu> = ({ isToggleMenuActive }) => {
  let navDataLinks = [
    { value: "Solution", href: "/solution", icon: faThumbsUp },
    { value: "Industries", href: "/industries", icon: faCalendar },
    { value: "Products", href: "/products", icon: faChessBishop },
    { value: "Resources", href: "/resources", icon: faBookmark },
    { value: "Pricing", href: "/pricing", icon: faMoneyBill1 },
    { value: "Login", href: "/login", icon: faUser },
  ];
  return (
    <section
      className={`${s.toggleMenu_wrapper} ${
        isToggleMenuActive ? s.active : ""
      }`}
    >
      <Link href={"/"} className={s.logo} style={font.style}>
        <Image src={"/Logo.svg"} alt="ToggleMenuLogo" width={30} height={30} />
        <span>PrimeCRM</span>
      </Link>
      <nav>
        {navDataLinks.map((link, i) => (
          <Link href={link.href} style={font.style} key={i}>
            <FontAwesomeIcon icon={link.icon} />
            {link.value}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default ToggleMenu;
