import React from "react";

const Header = ({children}) => {
  return (
    <>
      <header className="flex  Header bg-white ">
        <button className="grow">{"<"}</button>
        <h2 className=""> {children}</h2>
        <div className="grow"></div>
      </header>
    </>
  );
};

export default Header;
