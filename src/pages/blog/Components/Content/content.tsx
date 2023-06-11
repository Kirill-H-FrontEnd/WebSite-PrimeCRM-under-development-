// React
import { FC, useState } from "react";
// Styles
import s from "./styles/content.module.scss";
// Components
import Post from "../Post/post";
import SideBar from "../Sidebar/sideBar";
// UI Pagination
import Pagination from "@mui/material/Pagination";
import { useScrollTop } from "@/hooks/useScrollTop";
interface IContent {}

const Content: FC = ({}) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  // Change pages pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    useScrollTop();
    setPage(value);
  };
  return (
    <section className={s.blog_content}>
      <div className="container">
        <section className={s.blog_inner}>
          <section className={s.blog_posts}>
            <Post page={page} title={search} />
            <Pagination
              onChange={handleChange}
              count={3}
              page={page}
              variant="outlined"
            />
          </section>
          <SideBar setSearch={setSearch} search={search} />
        </section>
      </div>
    </section>
  );
};

export default Content;
