import React from "react";

const Header = ({children}) => {
  return (
    <>
      <header className="flex  Header bg-white ">
        <svg className="grow w-8" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h2 className=""> {children}</h2>
        <div className="grow"></div>
      </header>
    </>
  );
};

export default Header;
