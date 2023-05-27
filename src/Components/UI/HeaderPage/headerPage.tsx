import { FC } from "react";
// Styles
import s from "./headerPage.module.scss";
// Font
import { Jost } from "next/font/google";
const font = Jost({
  subsets: ["latin"],
  weight: ["600"],
});
interface IHeaderPage {
  title: string;
  description: string;
}

const HeaderPage: FC<IHeaderPage> = ({ title, description }) => {
  return (
    <section className={s.header_page}>
      <h2 style={font.style} className={s.title}>
        {title}
      </h2>
      <p className={s.description}>{description}</p>
    </section>
  );
};

export default HeaderPage;
