import React from "react";
import Header from "../Header/Header";

const Layout = ({ children, header }) => {
  return (

    <div className="h-screen">
      <Header>{header}</Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
