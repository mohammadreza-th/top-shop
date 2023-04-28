import React from "react";

const Header = ({children}) => {
  return (
    <>
      <header className="flex justify-center w-full bg-red-200">
       <button className="bg-red-400 px-3">{"<"}</button>
        <h2 className=" bg-red-300 px-3 w-full text-center"> {children}</h2>
       
      </header>
    </>
  );
};

export default Header;
