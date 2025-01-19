import { FaSearch } from "react-icons/fa";

const SearchBar = () => (
  <div className="flex md:flex-row flex-col justify-center items-center gap-2">
    <input
      type="text"
      placeholder="Search for a car..."
      className="p-2 border rounded-md w-full md:w-auto h-10 focus:outline-none"
    />
    <input
      type="date"
      placeholder="Pick a date..."
      className="p-2 border rounded-md w-full md:w-auto h-10 focus:outline-none"
    />
    <button className="flex justify-center items-center bg-marigold-500 hover:bg-marigold-700 px-4 py-2 rounded-md md:rounded-r-md focus:ring-2 focus:ring-gold w-full md:w-auto h-10 text-white focus:outline-none">
      <FaSearch />
    </button>
  </div>
);

export default SearchBar;
