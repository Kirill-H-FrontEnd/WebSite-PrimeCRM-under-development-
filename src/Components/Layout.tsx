import { FC, PropsWithChildren, useState } from "react";

import Meta from "@/Components/Seo/Meta";
import { IMeta } from "@/Components/Seo/meta.interface";
import Header from "./UI/Header/header";
import Footer from "./UI/Footer/footer";

import { Open_Sans } from "next/font/google";
import ToggleMenu from "./UI/ToggleMenu/toggleMenu";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
interface Props {}

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title }) => {
  const [isBurgerActive, setBurger] = useState(false);
  const [isToggleMenuActive, setToggleMenu] = useState(false);

  return (
    <Meta title={title}>
      <Header
        isBurgerActive={isBurgerActive}
        setBurger={setBurger}
        isToggleMenuActive={isToggleMenuActive}
        setToggleMenu={setToggleMenu}
      />
      <ToggleMenu
        isToggleMenuActive={isToggleMenuActive}
        setToggleMenu={setToggleMenu}
        setBurger={setBurger}
      />
      <main style={font.style}>{children}</main>
      <Footer />
    </Meta>
  );
};

export default Layout;
