import Layout from "@/Components/Layout";
import { FC } from "react";
import Hero from "./Components/Hero/hero";

const HomePage: FC = () => {
  return (
    <>
      <Layout title="Prime">
        <Hero />
      </Layout>
    </>
  );
};

export default HomePage;
