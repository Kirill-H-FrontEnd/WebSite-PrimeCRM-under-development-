import { FC, PropsWithChildren } from "react";

import Meta from "@/Components/Seo/Meta";
import { IMeta } from "@/Components/Seo/meta.interface";
import Header from "./UI/Header/header";
import Footer from "./UI/Footer/footer";

import { Open_Sans } from "next/font/google";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
interface Props {}

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title }) => {
  return (
    <Meta title={title}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Meta>
  );
};

export default Layout;
