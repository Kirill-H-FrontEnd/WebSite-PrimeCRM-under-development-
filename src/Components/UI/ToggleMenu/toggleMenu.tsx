// React
import { FC, SetStateAction } from "react";
// Styles
import s from "./toggleMenu.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessBishop,
  faBookmark,
  faMoneyBill1,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faInvision,
  faTwitter,
  faYoutube,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
    contentProps={{
      className: ({ isEnter }) =>
        `${s.accordionContent} ${isEnter && s.accordionContentExpanded}`,
    }}
    panelProps={{
      className: ({ isEnter }) =>
        `${s.accordionPanel} ${isEnter && s.accordionPanelExpanded}`,
    }}
  />
);
// Font
import { Jost } from "next/font/google";
import { useRouter } from "next/router";
const font = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});
interface IToggleMenu {
  isToggleMenuActive: boolean;
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
  setBurger: React.Dispatch<SetStateAction<boolean>>;
}

const ToggleMenu: FC<IToggleMenu> = ({
  isToggleMenuActive,
  setToggleMenu,
  setBurger,
}) => {
  const { asPath } = useRouter();
  let navDataLinks = [
    { value: "Home", href: "/", icon: faHouse },
    { value: "Blog", href: "/blog", icon: faBlogger },
    { value: "Products", href: "/products", icon: faChessBishop },
    { value: "Resources", href: "/resources", icon: faBookmark },
    { value: "Pricing", href: "/pricing", icon: faMoneyBill1 },
    { value: "Login", href: "/signIn", icon: faUser },
  ];
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
  return (
    <section
      onClick={() => {
        setToggleMenu(false), setBurger(false);
      }}
      className={`${s.toggleMenu_wrapper} ${
        isToggleMenuActive ? s.active : ""
      }`}
    >
      <section onClick={(e) => e.stopPropagation()} className={s.toggle_navBar}>
        <Link href={"/"} className={s.logo} style={font.style}>
          <Image
            src={"/Logo.svg"}
            alt="ToggleMenuLogo"
            width={30}
            height={30}
          />
          <span>PrimeCRM</span>
        </Link>
        <nav>
          {navDataLinks.map((link, i) => (
            <Link
              className={asPath === link.href ? s.link_active : ""}
              href={link.href}
              style={font.style}
              key={i}
            >
              <FontAwesomeIcon icon={link.icon} />
              {link.value}
            </Link>
          ))}
        </nav>
        <div className={s.toggle_social}>
          <Accordion
            transition
            transitionTimeout={200}
            className={`${s.szhAccordion}`}
            style={font.style}
          >
            <AccordionItem
              header={
                <>
                  <FontAwesomeIcon icon={faBookmark} />
                  Social
                  <FontAwesomeIcon icon={faChevronDown} />
                </>
              }
            >
              {socialLinksData.map((link, i) => (
                <Link
                  title={link.title}
                  key={i}
                  href={link.href}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={link.icon} />
                  {link.title}
                </Link>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </section>
  );
};

export default ToggleMenu;
