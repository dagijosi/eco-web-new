import CardList from "../components/Home/CardList";
import Filter from "../components/Home/Filter";
import SearchBar from "../components/Home/SearchBar";

const Home = () => {
  return (
    <div className="mt-2 text-center">
      <SearchBar />
      <div className="flex justify-center items-center">
        <CardList />
      </div>
      <div className="mt-6">
        <h1 className="font-semibold text-2xl text-marigold-600 underline underline-offset-8">Browse Our Selection of Cars</h1>
        <Filter />
      </div>
    </div>
  );
};

export default Home;
