import { FC } from "react";
import { Jost, Open_Sans } from "next/font/google";
// Styles
import s from "./signIn.module.scss";
import Image from "next/image";
import Link from "next/link";
import Meta from "@/Components/Seo/Meta";

interface ISignIn {}

const font_logo = Jost({
  subsets: ["latin"],
  weight: ["700"],
});

const font_text_700 = Open_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
const font_text_500 = Open_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
const SignIn: FC = ({}) => {
  return (
    <>
      <Meta title="Sign In">
        <section className={s.signIn_wrapper}>
          <header className={s.signIn_header}>
            <div className="container">
              <section className={s.header_inner}>
                <Link href={"/"} className={s.logo}>
                  <Image src={"/Logo.svg"} alt="Logo" width={35} height={35} />
                  <span style={font_logo.style}>PrimeCRM</span>
                </Link>
              </section>
            </div>
          </header>
          <section className={s.signIn_inner}>
            <div className="container">
              {" "}
              <form>
                <div className={s.form_header}>
                  <h2 style={font_text_700.style}>Welcome back</h2>
                  <h1 style={font_text_700.style}>
                    Enter your details<span>.</span>
                  </h1>
                  <p style={font_text_500.style}>
                    Don't have an account?<Link href={"/signUp"}> Sign Up</Link>
                  </p>
                </div>
                <div className={s.form_outputs}>
                  <div>
                    <input
                      style={font_text_500.style}
                      placeholder="Name"
                      type="text"
                    />
                    <input
                      style={font_text_500.style}
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <input
                    style={font_text_500.style}
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <nav>
                  <button style={font_text_700.style}>Log in</button>
                </nav>
              </form>
            </div>
          </section>
        </section>
      </Meta>
    </>
  );
};

export default SignIn;
