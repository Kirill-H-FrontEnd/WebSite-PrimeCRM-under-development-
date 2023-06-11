// Components
import Layout from "@/Components/Layout";
// Styles
import s from "./singleBlog.module.scss";
// Next
import { useRouter } from "next/router";
// React
import { FC } from "react";
import { useQuery } from "react-query";
// Axios
import axios from "axios";

interface IPostPage {}

const PostPage: FC = ({}) => {
  const { query } = useRouter();
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["post"], () => fetchDataPost());
  const DATA_URL = "http://localhost:3002";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataPost = async () => {
    return axios.get(`/posts/${query.id}`);
  };
  console.log(resp?.data);
  const post = resp?.data;
  return (
    <Layout title={`Blog | Post ${query.id}`}>
      <section className={s.singleBlog}>
        <div className="container">
          <section className={s.singleBlog_post}>
            <article>
              <img src={resp?.data.image} alt="" />
            </article>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default PostPage;
