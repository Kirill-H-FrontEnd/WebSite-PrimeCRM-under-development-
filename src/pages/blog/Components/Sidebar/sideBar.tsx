// React
import { FC, SetStateAction } from "react";
// Styles
import s from "./styles/sideBar.module.scss";
// Components
import RecentPost from "./post";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Link from "next/link";
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
const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface ISideBar {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
}

const SideBar: FC<ISideBar> = ({ setSearch, search }) => {
  const dataAccordionAll = [
    { title: "Solution", href: "" },
    { title: "Industries", href: "" },
    { title: "Products", href: "" },
    { title: "Resources", href: "" },
    { title: "Pricing", href: "" },
    { title: "Login", href: "" },
  ];
  const dataAccordionTechnology = [
    { title: "Sale", href: "" },
    { title: "Marketing", href: "" },
    { title: "Real Estate", href: "" },
  ];
  const dataAccordionBusiness = [
    { title: "Education", href: "" },
    { title: "Automotive", href: "" },
  ];
  const dataAccordionMarketing = [{ title: "Pricing", href: "" }];

  return (
    <section className={s.sideBar}>
      <form className={s.sideBar_form}>
        <input
          style={font.style}
          placeholder="Search..."
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
      <section className={s.sideBar_posts}>
        <h3 style={font.style}>Recent Post</h3>
        <ul>
          <RecentPost />
        </ul>
      </section>
      <section className={s.sideBar_categories}>
        <h3 style={font.style}>Categories</h3>
        <div>
          <Accordion
            transition
            transitionTimeout={200}
            className={`${s.szhAccordion}`}
            style={font.style}
          >
            <AccordionItem
              header={
                <>
                  ALL <span>({dataAccordionAll.length})</span>
                </>
              }
            >
              {dataAccordionAll.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </AccordionItem>
            <AccordionItem
              header={
                <>
                  TECHNOLOGY <span>({dataAccordionTechnology.length})</span>
                </>
              }
            >
              {dataAccordionTechnology.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </AccordionItem>
            <AccordionItem
              header={
                <>
                  Business <span>({dataAccordionBusiness.length})</span>
                </>
              }
            >
              {dataAccordionBusiness.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </AccordionItem>
            <AccordionItem
              header={
                <>
                  Marketing <span>({dataAccordionMarketing.length})</span>
                </>
              }
            >
              {dataAccordionMarketing.map((link, i) => (
                <Link key={i} href={link.href}>
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

export default SideBar;
