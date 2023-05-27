// Components
import Layout from "@/Components/Layout";
import HeaderPage from "@/Components/UI/HeaderPage/headerPage";
// React
import { FC } from "react";

interface IBlog {}

const Blog: FC = ({}) => {
  return (
    <>
      <Layout title="Blog">
        <HeaderPage
          title="Our Journal"
          description="Get the latest articles from our journal, writing, discuss and share"
        />
      </Layout>
    </>
  );
};

export default Blog;
