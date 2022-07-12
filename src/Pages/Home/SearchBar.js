import { IoMdArrowDropdown } from "react-icons/io";
const SearchBar = ({ getInputValue }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-around items-center mt-10">
      <p className="text-4xl font-bold">Search properties to rent</p>
      <div className="flex justify-between items-center w-64 h-11 bg-white border-2 border-gray-300 rounded-md mt-3 md:mt-0 lg:mt-0 px-3">
        <input
          onChange={getInputValue}
          className="font-bold placeholder:font-bold focus:outline-none"
          type="text"
          placeholder="Search with Search Bar"
        />
        <IoMdArrowDropdown className="bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};

export default SearchBar;
