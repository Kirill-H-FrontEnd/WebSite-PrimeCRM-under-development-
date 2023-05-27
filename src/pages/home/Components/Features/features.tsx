// Styles
import Image from "next/image";
import s from "./features.module.scss";
// React
import { FC } from "react";
// Images
import icon1 from "./Images/icon1.svg";
import icon2 from "./Images/icon2.svg";
import icon3 from "./Images/icon3.svg";
// Font
import { Jost } from "next/font/google";
const font = Jost({
  subsets: ["latin"],
  weight: ["500", "600"],
});
interface IFeatures {}

const Features: FC = ({}) => {
  const dataCards = [
    {
      icon: icon1,
      title: "Powerful Settings",
      description: "Provide excellent customer service.Answer more tickets.",
    },
    {
      icon: icon2,
      title: "User Friendly",
      description:
        "Use Timeline to plan projects right how the pieces fit together.",
    },
    {
      icon: icon3,
      title: "Integrated platform",
      description: "Vivants massa elided team endue odin fuegian dolor est.",
    },
  ];
  return (
    <section className={s.features}>
      <div className="container">
        <section className={s.features_inner}>
          <section className={s.features_header}>
            <h2 style={font.style}>Explore Premium Features</h2>
            <p>
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </section>
          <section className={s.features_cards}>
            {dataCards.map((card, i) => (
              <article key={i} className={s.features_card}>
                <Image src={card.icon} alt="" width={50} height={50} />
                <h3 style={font.style}>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

export default Features;
