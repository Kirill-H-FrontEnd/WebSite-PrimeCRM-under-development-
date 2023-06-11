// React
import { FC } from "react";
import { useQuery } from "react-query";
import ContentLoader from "react-content-loader";
// Interfaces
import { IRecentPosts } from "@/interfaces/posts";
// Axios
import axios from "axios";
// Styles
import s from "./styles/sideBar.module.scss";
// Components
import Loader from "@/Components/UI/Loader/loader";
import Error from "@/Components/UI/Error/error";
import Link from "next/link";

interface IRecentPost {}

const RecentPost: FC = ({}) => {
  const date = new Date().toDateString();
  const MyCodeLoader = () => (
    <ContentLoader
      height={70}
      speed={1}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      viewBox="0 0 70 70"
    >
      <rect x="0" y="0" rx="20" ry="20" width="70" height="70" />
    </ContentLoader>
  );

  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["recentPosts"], () => fetchDataPosts());
  const DATA_URL = "http://localhost:3002";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataPosts = async () => {
    return axios.get(`/recentPosts?&_limit=3`);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error error="Oops! Posts not loaded..." />}
      {isSuccess &&
        resp?.data.map((post: IRecentPosts) => (
          <Link href={""} key={post.id} className={s.sideBar_post}>
            <MyCodeLoader />
            <div>
              <h4>{post.title}</h4>
              <span>{date}</span>
            </div>
          </Link>
        ))}
    </>
  );
};

export default RecentPost;
