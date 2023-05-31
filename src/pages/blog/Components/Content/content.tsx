// React
import { FC } from "react";
// Styles
import s from "./content.module.scss";
import Post from "../Post/post";
import SideBar from "../Sidebar/sideBar";
interface IContent {}

const Content: FC = ({}) => {
  return (
    <section className={s.blog_content}>
      <div className="container">
        <section className={s.blog_inner}>
          <section className={s.blog_posts}>
            <Post />
          </section>
          <SideBar />
        </section>
      </div>
    </section>
  );
};

export default Content;
