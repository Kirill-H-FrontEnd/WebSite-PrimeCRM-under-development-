import Layout from "@/Components/Layout";
import HeaderPage from "@/Components/UI/HeaderPage/headerPage";
import { FC } from "react";

interface ILicenses {}

const Licenses: FC = ({}) => {
  return (
    <>
      <Layout title="Licenses">
        <HeaderPage
          title="Licenses"
          description="All Graphical Assets In This Template Are Licensed For Personal And Commercial Use. If You’d Like To Use A Specific Asset, Please Check The Licenses Below."
        />
      </Layout>
    </>
  );
};

export default Licenses;
