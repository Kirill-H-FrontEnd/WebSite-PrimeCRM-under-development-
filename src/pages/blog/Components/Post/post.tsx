// React
import { FC } from "react";
import { useQuery } from "react-query";
// Axios
import axios from "axios";
// Components
import Loader from "@/Components/UI/Loader/loader";
import Error from "@/Components/UI/Error/error";
interface IPost {}

const Post: FC = ({}) => {
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["posts"], () => fetchDataPosts());
  const DATA_URL = "http://localhost:3002";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataPosts = async () => {
    return axios.get(`/p1osts?&_limit=3`);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error error="Oops! Posts not loaded..." />}
      {isSuccess && resp?.data.map((post: any) => <h1>{post.id}</h1>)}
    </>
  );
};

export default Post;
