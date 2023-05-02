import { useState } from "react";

 const Search = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const handleOnChange = (e) => {
      setSearchedValue(e);
  };
  return (
    <input
    className=" h-10 p-3 w-8/12 mx-auto rounded-md bg-red-100 text-gray-500 placeholder-red-300"
      value={searchedValue}
      onChange={(e) => {
        handleOnChange(e.target.value);

      }}
      placeholder="Search ..."
      type="text"
    />
  );
};

export default Search