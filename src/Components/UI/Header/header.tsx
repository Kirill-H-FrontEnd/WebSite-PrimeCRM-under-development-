// Styles
import s from "./header.module.scss";
// Router
import Link from "next/link";
// Components
import { FC, SetStateAction } from "react";
import Image from "next/image";
import { Jost } from "next/font/google";
import { useRouter } from "next/router";
import BurgerMenu from "../BurgerMenu/burgerMenu";

const font_link = Jost({
  subsets: ["latin"],
  weight: ["500"],
});
const font_logo = Jost({
  subsets: ["latin"],
  weight: ["700"],
});
interface IHeader {
  isBurgerActive: boolean;
  isToggleMenuActive: boolean;
  setBurger: React.Dispatch<SetStateAction<boolean>>;
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
}

const Header: FC<IHeader> = ({
  isBurgerActive,
  setBurger,
  setToggleMenu,
  isToggleMenuActive,
}) => {
  const { asPath } = useRouter();
  let navLinksData = [
    { value: "Solution", href: "/" },
    { value: "Industries", href: "/industries" },
    { value: "Products", href: "/products" },
    { value: "Resources", href: "/resources" },
    { value: "Pricing", href: "/pricing" },
    { value: "Login", href: "/login" },
  ];
  return (
    <header className={s.header}>
      <div className="container">
        <section className={s.header_inner}>
          <Link href="/" className={s.logo} style={font_logo.style}>
            <Image src={"/Logo.svg"} alt="logo" width={35} height={35} />
            <span>PrimeCRM</span>
          </Link>
          <nav>
            {navLinksData.map((link, i) => (
              <Link
                className={asPath === link.href ? s.active : ""}
                href={link.href}
                style={font_link.style}
                key={i}
              >
                {link.value}
              </Link>
            ))}
          </nav>
          <BurgerMenu
            isBurgerActive={isBurgerActive}
            setBurger={setBurger}
            setToggleMenu={setToggleMenu}
            isToggleMenuActive={isToggleMenuActive}
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
