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
      <div className="container">
        <h2 style={font.style} className={s.title}>
          {title}
        </h2>
        <p className={s.description}>{description}</p>
      </div>
    </section>
  );
};

export default HeaderPage;
