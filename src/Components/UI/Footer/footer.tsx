// React
import { FC } from "react";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faInvision,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// Styles
import s from "./footer.module.scss";
// Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const AccordionItem = ({ ...rest }) => (
  <Item
    {...rest}
    className={s.accordion}
    headingProps={{
      className: ({ isEnter }) =>
        `${s.accordionHeader} ${isEnter && s.accordionHeaderExpanded}`,
    }}
    buttonProps={{
      className: ({ isEnter }) =>
        `${s.accordionBtn} ${isEnter && s.accordionBtnExpanded}`,
    }}
    contentProps={{ className: s.accordionContent }}
    panelProps={{ className: s.accordionPanel }}
  />
);
// Font
import { Jost } from "next/font/google";
const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface IProps {}

const Footer: FC = ({}) => {
  const { asPath } = useRouter();
  const socialLinksData = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com/",
      title: "Instagram",
    },
    { icon: faFacebook, href: "https://www.facebook.com/", title: "Facebook" },
    {
      icon: faTwitter,
      href: "https://twitter.com/?lang=ru",
      title: "Twitter",
    },
    {
      icon: faInvision,
      href: "https://www.invisionapp.com/",
      title: "Invision",
    },
    { icon: faYoutube, href: "https://www.youtube.com/", title: "Youtube" },
  ];
  const usefulLinksData = [
    { value: "Solution", href: "" },
    { value: "Industries", href: "" },
    { value: "Products", href: "" },
    { value: "Resources", href: "" },
    { value: "Pricing", href: "" },
  ];
  const serviceLinksData = [
    { value: "Sale", href: "" },
    { value: "Marketing", href: "" },
    { value: "Real Estate", href: "" },
    { value: "Automotive", href: "" },
    { value: "Education", href: "" },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={s.footer}>
      <div className="container">
        <section className={s.footer_inner}>
          <section className={s.footer_header}>
            <Link href="/" className={s.logo}>
              <Image src={"/Logo.svg"} alt="Logo" width={35} height={35} />
              <span style={font.style}>PrimeCRM</span>
            </Link>
            <nav>
              {socialLinksData.map((link, i) => (
                <Link
                  title={link.title}
                  key={i}
                  href={link.href}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </Link>
              ))}
            </nav>
          </section>
          <section className={s.footer_content}>
            <section style={font.style} className={s.footer_bar}>
              <h5>Useful Link</h5>
              <h5>Service</h5>
              <h5>Contact Us</h5>
              <h5>Our Latest News</h5>
              <button
                title="Scroll to top"
                onClick={() => scrollToTop()}
                className={s.btn_top}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            </section>
            <section className={s.footer_info}>
              <section className={s.footer_nav}>
                <nav style={font.style}>
                  {usefulLinksData.map((link, i) => (
                    <Link
                      className={`${asPath === link.href ? s.active : ""}`}
                      key={i}
                      href={link.href}
                    >
                      {link.value}
                    </Link>
                  ))}
                </nav>
                <nav style={font.style}>
                  {serviceLinksData.map((link, i) => (
                    <Link key={i} href={link.href}>
                      {link.value}
                    </Link>
                  ))}
                </nav>
                <section className={s.footer_contacts} style={font.style}>
                  <div>
                    <p>1700 W Blanche St, Kyiv</p>
                    <p>Port South USA, American</p>
                  </div>
                  <div>
                    <p>+3255 456 789</p>
                    <a href="">mail@primarily.com</a>
                  </div>
                </section>
              </section>
              <figure className={s.footer_news} style={font.style}>
                <Link href={""}>Read Now</Link>
              </figure>
            </section>
          </section>
          {/* Accordion */}
          <section className={s.footerWrapper_accordion}>
            <Accordion
              style={font.style}
              transition
              transitionTimeout={200}
              className={`${s.szhAccordion}`}
            >
              <AccordionItem
                header={
                  <>
                    Useful Links
                    <FontAwesomeIcon icon={faChevronDown} />
                  </>
                }
              >
                {({ toggle }: any) => (
                  <>
                    {usefulLinksData.map((link, i) => (
                      <Link key={i} href={link.href}>
                        {link.value}
                      </Link>
                    ))}
                  </>
                )}
              </AccordionItem>
              <AccordionItem
                header={
                  <>
                    Service
                    <FontAwesomeIcon icon={faChevronDown} />
                  </>
                }
              >
                {({ toggle }: any) => (
                  <>
                    {serviceLinksData.map((link, i) => (
                      <Link key={i} href={link.href}>
                        {link.value}
                      </Link>
                    ))}
                  </>
                )}
              </AccordionItem>
              <AccordionItem
                header={
                  <>
                    Contacts Us
                    <FontAwesomeIcon icon={faChevronDown} />
                  </>
                }
              >
                <section>
                  <div>
                    <p>1700 W Blanche St, Kyiv</p>
                    <p>Port South USA, American</p>
                  </div>
                  <div>
                    <p>+3255 456 789</p>
                    <a href="">mail@primarily.com</a>
                  </div>
                </section>
              </AccordionItem>
            </Accordion>
          </section>
          <section className={s.footer_copyright}>
            <span style={font.style}>
              Copyright © Primarily | Designed by VictorFlow Templates{" "}
            </span>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
