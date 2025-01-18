import { FaSearch } from "react-icons/fa";

const SearchBar = () => (
  <div className="flex justify-center items-center">
    <input
      type="text"
      placeholder="Search for a car..."
      className="p-2 border rounded-l-md h-10 focus:outline-none"
    />
    <input
      type="date"
      placeholder="Pick a date..."
      className="p-2 border-t border-b h-10 focus:outline-none"
    />
    <button className="flex items-center bg-gold hover:bg-gold-dark px-4 py-2 rounded-r-md focus:ring-2 focus:ring-gold h-10 text-white focus:outline-none">
      <FaSearch />
    </button>
  </div>
);

export default SearchBar;
