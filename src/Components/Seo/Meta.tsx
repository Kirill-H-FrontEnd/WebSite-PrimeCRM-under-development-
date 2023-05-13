import { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.interface";
import Head from "next/head";

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Meta;
