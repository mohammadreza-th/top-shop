import {  Header, Layout } from "@/components";
import { NoItem } from "@/components/NoItem/NoItem";
import React from "react";

const items = () => {
  return (
    <Layout>
      <Header>item</Header>
      <div className="flex-col justify-center items-center bg-white">
        <NoItem />
      </div>
    </Layout>
  );
};
export default items;
