import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../data/productData";
import RelatedProductList from "../components/Detail/RelatedProductList";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = findProductById(id);

  if (!product) {
    return <ProductNotFound navigate={navigate} />;
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="px-1 md:px-4 py-8 min-h-screen">
      <h1 className="mx-2 md:mx-8 mb-6 font-semibold text-2xl text-marigold-600">
        Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:px-8">
        <ProductImage imageSrc={product.imageSrc} title={product.title} />
        <ProductContent product={product} navigate={navigate} />
      </div>
      <RelatedProductsSection relatedProducts={relatedProducts} />
    </div>
  );
};

const findProductById = (id: string | undefined) => {
  return productData.find((product) => product.id === parseInt(id || "", 10));
};

const ProductNotFound = ({ navigate }: { navigate: ReturnType<typeof useNavigate> }) => (
  <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
    <h2 className="mb-4 font-bold text-4xl text-red-500">Product Not Found</h2>
    <button
      onClick={() => navigate(-1)}
      className="bg-marigold-700 hover:bg-marigold-800 shadow-md px-6 py-2 rounded-lg text-white"
    >
      Back to Products
    </button>
  </div>
);

const ProductImage = ({ imageSrc, title }: { imageSrc: string; title: string }) => (
  <img
    className="rounded-md w-[36rem] h-[20rem] object-cover"
    src={imageSrc}
    alt={`Image of ${title}`}
  />
);

const ProductContent = ({
    product,
    navigate,
  }: {
    product: any;
    navigate: ReturnType<typeof useNavigate>;
  }) => (
    <div className="flex flex-col justify-between space-y-6 mb-4 md:mb-0 p-4 lg:p-6">
      {/* Product Details */}
      <div className="space-y-4">
        <h1 className="font-semibold text-2xl text-marigold-800">{product.title}</h1>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <p className="text-gray-400 text-xs">
          Published: {new Date(product.date).toLocaleDateString()}
        </p>
        <div className="gap-x-4 gap-y-2 grid grid-cols-2 text-gray-600 text-sm">
          <p>
            <span className="font-medium text-gray-700">Category ID:</span> {product.categoryId}
          </p>
          <p>
            <span className="font-medium text-gray-700">Popular:</span> {product.isPopular ? "Yes" : "No"}
          </p>
          <p>
            <span className="font-medium text-gray-700">Type:</span> {product.type}
          </p>
          <p>
            <span className="font-medium text-gray-700">Available:</span>{" "}
            {new Date(product.availableDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium text-gray-700">Plate No:</span> {product.plateNo}
          </p>
          <p>
            <span className="font-medium text-gray-700">Color:</span> {product.color}
          </p>
        </div>
      </div>
  
      {/* Price and Navigation */}
      <div className="space-y-4">
        <p className="font-semibold text-marigold-500 text-xl">{product.amount}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-marigold-500 hover:bg-marigold-600 shadow-md py-2 rounded-md w-full text-sm text-white transition-all duration-300"
        >
          Book
        </button>
      </div>
    </div>
  );
  

const RelatedProductsSection = ({ relatedProducts }: { relatedProducts: any[] }) => (
  <div className="md:p-8 text-left">
    <h1 className="mb-6 font-semibold text-2xl text-marigold-600 underline underline-offset-8">
      Related Vehicles
    </h1>
    <RelatedProductList relatedProducts={relatedProducts} />
  </div>
);

const getRelatedProducts = (product: any) => {
  return productData.filter(
    (p) =>
      p.id !== product.id &&
      (p.title === product.title || p.amount === product.amount)
  );
};

const FilterOptions = () => (
  <div className="p-4">
    <h2 className="mb-4 font-semibold text-xl">Filter Options</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700">Category</label>
        <select className="mt-1 p-2 border rounded-md w-full">
          <option>All</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Price Range</label>
        <input type="range" className="mt-1 w-full" />
      </div>
      <div>
        <label className="block text-gray-700">Availability</label>
        <select className="mt-1 p-2 border rounded-md w-full">
          <option>All</option>
          <option>Available</option>
          <option>Unavailable</option>
        </select>
      </div>
    </div>
  </div>
);

export default Detail;
