import CardList from "../components/Home/CardList";
import Filter from "../components/Home/Filter";
import ProductList from "../components/Home/ProductList";
import PopularProductList from "../components/Home/PopularProductList";
import SearchBar from "../components/Home/SearchBar";
import { FilterProvider } from "../context/FilterContext";

const Home = () => {
  return (
    <FilterProvider>
      <div className="mt-2 text-center">
        <SearchBar />
        <div className="flex justify-center items-center">
          <CardList />
        </div>
        <div className="space-y-5 mt-8">
          <h1 className="font-semibold text-2xl text-marigold-600 underline underline-offset-8">
            Browse Our Selection of Cars
          </h1>
          <Filter />
        </div>
        <div>
          <ProductList />
        </div>
        <div className="md:p-8 text-left">
          <h1 className="mb-6 font-semibold text-2xl text-marigold-600 underline underline-offset-8">
            Popular
          </h1>
          <PopularProductList />
        </div>
      </div>
    </FilterProvider>
  );
};

export default Home;
