const Search = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="mb-3 h-10 p-3 w-8/12 mx-auto rounded-md bg-red-100 text-gray-500 placeholder-red-300"
      placeholder="Search ..."
      type="text"
    />
  );
};

export default Search;
