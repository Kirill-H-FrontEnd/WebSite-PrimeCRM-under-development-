import { FC } from "react";
import { Jost, Open_Sans } from "next/font/google";
// Styles
import s from "./signUp.module.scss";
import Image from "next/image";
import Link from "next/link";
import Meta from "@/Components/Seo/Meta";

interface ISignUp {}

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
      <Meta title="Sign Up">
        {" "}
        <section className={s.signUp_wrapper}>
          <header className={s.signUp_header}>
            <div className="container">
              <section className={s.header_inner}>
                <Link href={"/"} className={s.logo}>
                  <Image src={"/Logo.svg"} alt="Logo" width={35} height={35} />
                  <span style={font_logo.style}>PrimeCRM</span>
                </Link>
              </section>
            </div>
          </header>
          <section className={s.signUp_inner}>
            <div className="container">
              {" "}
              <form>
                <div className={s.form_header}>
                  <h2 style={font_text_700.style}>Start for free</h2>
                  <h1 style={font_text_700.style}>
                    Create new account<span>.</span>
                  </h1>
                  <p style={font_text_500.style}>
                    You have an account?<Link href={"/signIn"}> Log in</Link>
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
                      placeholder="Last name"
                      type="text"
                    />
                  </div>
                  <input
                    style={font_text_500.style}
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    style={font_text_500.style}
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <nav>
                  <button style={font_text_700.style}>Create account</button>
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
