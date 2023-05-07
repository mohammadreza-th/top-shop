import React from "react";
import {Header, Footer} from "@/components";


const Layout = ({ children, header, footer }) => {
  return (

    <div className="h-screen">
      <Header>{header}</Header>
      <main>{children}</main>
      {footer?<Footer>{footer}</Footer>:true}
    </div>
  );
};

export default Layout;
