import { FaArrowRight } from "react-icons/fa";

interface CardProps {
    imageSrc: string;
    title: string;
  }
  
const Card = ({ imageSrc, title }: CardProps) => (
  <div className="flex items-center gap-6 bg-gray-100 shadow-md hover:shadow-lg p-4 rounded-md">
    <img src={imageSrc} alt={title.toLowerCase()} className="w-[15rem]" />
    <div className="flex flex-col">
      <h1 className="max-w-[8rem] text-balance text-gray-500 text-left">
        {title}
      </h1>
      <a
        href="/signup"
        className="flex justify-start items-center gap-2 mt-4 text-gold"
      >
        SignUp
        <div className="flex justify-center items-center bg-gold-light p-1 rounded-full">
          <FaArrowRight className="text-white text-xs" />
        </div>
      </a>
    </div>
  </div>
);

export default Card;
