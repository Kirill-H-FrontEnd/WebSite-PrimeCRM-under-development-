import { FC } from "react";
import { Jost } from "next/font/google";
// Styles
import s from "./hero.module.scss";

const font = Jost({
  subsets: ["latin"],
  weight: ["600"],
});
const Hero: FC = () => {
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <section className={s.hero_inner}>
            <article>
              <h1 style={font.style}>
                The CRM Platform Your Whole Business Will Love
              </h1>
              <p>
                Provide excellent customer service. Answer more tickets
                all-in-one Primarily software.
              </p>
              <nav>
                <button style={font.style}>Get Started</button>
                <button style={font.style}>How It Work</button>
              </nav>
            </article>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
