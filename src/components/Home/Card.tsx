import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  imageSrc: string;
  title: string;
  href?: string;
}

const Card = ({ imageSrc, title, href = "/signup" }: CardProps) => (
  <div className="flex items-center gap-6 bg-gradient-to-tr from-marigold-100 to-marigold-300 shadow-md hover:shadow-lg p-4 rounded-md transition-shadow duration-300">
    <img
      src={imageSrc}
      alt={title.toLowerCase()}
      className="rounded-md w-[15rem]"
      onError={(e) => (e.currentTarget.src = "/images/fallback.png")}
    />
    <div className="flex flex-col">
      <h1 className="md:max-w-[8rem] font-semibold text-left text-marigold-700">
        {title}
      </h1>
      <a
        href={href}
        className="flex items-center gap-2 mt-4 text-marigold-600 hover:text-marigold-800 transition-colors duration-300 group"
      >
        <span>Sign Up</span>
        <div className="group-hover:bg-marigold-700 flex justify-center items-center bg-marigold-600 p-1 rounded-full transition-colors duration-300">
          <FaArrowRight className="text-white text-xs" />
        </div>
      </a>
    </div>
  </div>
);

export default Card;
