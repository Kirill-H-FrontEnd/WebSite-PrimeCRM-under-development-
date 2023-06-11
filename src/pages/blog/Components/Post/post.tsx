// React
import { FC } from "react";
import { useQuery } from "react-query";
// Styles
import s from "./styles/post.module.scss";
// Axios
import axios from "axios";
// Components
import Loader from "@/Components/UI/Loader/loader";
import Error from "@/Components/UI/Error/error";
// Interfaces
import { IPosts } from "@/interfaces/posts";
// Next
import Link from "next/link";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// Font
import { Jost } from "next/font/google";
import { useRouter } from "next/router";
const font = Jost({
  subsets: ["latin"],
  weight: ["500", "600"],
});
interface IPost {
  page: number;
  title: string;
}

const Post: FC<IPost> = ({ page, title }) => {
  const date = new Date().toDateString();
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["posts", page, title], () => fetchDataPosts());
  const DATA_URL = "http://localhost:3002";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataPosts = async () => {
    return axios.get(`/posts?title_like${title}&_limit=3&_page=${page}`);
  };
  const filterPosts = resp?.data.filter((post: IPost) => {
    return post.title.toLowerCase().includes(title.toLowerCase());
  });
  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error error="Oops! Posts not loaded..." />}
      {isSuccess &&
        filterPosts.map((post: IPosts) => (
          <article key={post.id} className={s.blog_post}>
            <img src={post.image} alt="" />
            <section className={s.post_content}>
              <div className={s.post_info}>
                <span>
                  <FontAwesomeIcon icon={faCalendar} width={20} height={20} />
                  {date}
                </span>
              </div>
              <h3 style={font.style}>{post.title}</h3>
              <p>{post.description}</p>
              <Link style={font.style} href={`/blog/${post.id}`}>
                Read More
              </Link>
            </section>
          </article>
        ))}
    </>
  );
};

export default Post;
