// Styles
import s from "./header.module.scss";
// Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Components
import BurgerMenu from "../BurgerMenu/burgerMenu";
// React
import { FC, SetStateAction, useEffect, useRef, useState } from "react";
// Font
import { Jost } from "next/font/google";
const font = Jost({
  subsets: ["latin"],
  weight: ["500", "700"],
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
  const [isFixed, setFixed] = useState(false);
  let navLinksData = [
    { value: "Solution", href: "/" },
    { value: "Industries", href: "/industries" },
    { value: "Products", href: "/products" },
    { value: "Resources", href: "/resources" },
    { value: "Pricing", href: "/pricing" },
    { value: "Log in", href: "/signIn" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setFixed(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${s.header} ${isFixed ? s.fixed : ""}`}>
      <div className="container">
        <section className={s.header_inner}>
          <Link href="/" className={s.logo} style={font.style}>
            <Image src={"/Logo.svg"} alt="logo" width={35} height={35} />
            <span>PrimeCRM</span>
          </Link>
          <nav>
            {navLinksData.map((link, i) => (
              <Link
                className={asPath === link.href ? s.active : ""}
                href={link.href}
                style={font.style}
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
