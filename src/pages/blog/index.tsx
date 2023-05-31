// Components
import Layout from "@/Components/Layout";
import HeaderPage from "@/Components/UI/HeaderPage/headerPage";
// React
import { FC } from "react";
// Styles
import s from "./blog.module.scss";

import SideBar from "./Components/Sidebar/sideBar";
import Content from "./Components/Content/content";
interface IBlog {}

const Blog: FC = ({}) => {
  return (
    <>
      <Layout title="Blog">
        <HeaderPage
          title="Our Journal"
          description="Get the latest articles from our journal, writing, discuss and share"
        />
        <Content />
      </Layout>
    </>
  );
};

export default Blog;
