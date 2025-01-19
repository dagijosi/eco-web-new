import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { productData } from "../../data/productData";

const RelatedProductList = ({ relatedProducts }: { relatedProducts: any[] }) => {
  const navigate = useNavigate();

  const ProductCard = ({ product }: { product: any }) => {
    return (
      <motion.div
        className="bg-marigold-50 shadow-lg hover:shadow-xl rounded-lg max-w-[13rem] text-start transform transition-transform duration-300 overflow-hidden ease-in-out"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }} 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          className="w-full h-30 object-cover"
          src={product.imageSrc}
          alt={product.title}
        />
        <div className="px-4 py-2">
          <h2 className="font-semibold text-base text-marigold-800">
            {product.title}
          </h2>
          <p className="mt-1 text-marigold-700 text-sm truncate">
            {product.description}
          </p>
          <p className="mt-1 text-marigold-600 text-xs">{product.date}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="font-bold text-marigold-800 text-sm">
              {product.amount}
            </p>
            <motion.button
              className="bg-marigold-500 hover:bg-marigold-600 px-4 py-2 rounded-md text-white text-xs transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/detail/${product.id}`)}
            >
              Details
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="gap-4 grid grid-cols-2 md:grid-cols-6 p-2 md:p-6">
        {relatedProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductList;
