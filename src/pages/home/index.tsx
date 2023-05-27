import Layout from "@/Components/Layout";
import { FC } from "react";
import Hero from "./Components/Hero/hero";
import Features from "./Components/Features/features";

const HomePage: FC = () => {
  return (
    <>
      <Layout title="Prime">
        <Hero />
        <Features />
      </Layout>
    </>
  );
};

export default HomePage;
