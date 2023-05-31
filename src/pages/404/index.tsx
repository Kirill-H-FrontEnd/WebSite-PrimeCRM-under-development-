// Components
import Layout from "@/Components/Layout";
// React
import { FC } from "react";
// Styles
import s from "./404.module.scss";
// Next
import Link from "next/link";
// Font
import { Jost } from "next/font/google";
const font = Jost({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

interface INotFountPage {}

const NotFountPage: FC = ({}) => {
  return (
    <>
      <Layout title="Not Found">
        <section className={s.notFoundPage}>
          <div className="container">
            <section className={s.notFoundPage_inner}>
              <h2 style={font.style}>404</h2>
              <h3 style={font.style}>Oops! Page not found</h3>
              <p>
                Lorem ipsum dolor sit amen, consectetur advising eliot. Mattes
                longue premium faucet's leo nist nullo pearter null.
              </p>
              <Link style={font.style} href={"/"}>
                Go to Homepage
              </Link>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFountPage;
