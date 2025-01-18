import React, { useState } from "react";
import {
  FaCar,
  FaTruck,
  FaBus,
  FaMotorcycle,
  FaBicycle,
  FaTractor,
  FaShuttleVan,
  FaCarSide,
} from "react-icons/fa";

interface FilterItem {
  id: number;
  title: string;
  icon: JSX.Element;
}

const FilterData: FilterItem[] = [
  { id: 1, title: "All", icon: <FaCar /> },
  { id: 2, title: "Sedan", icon: <FaCarSide /> },
  { id: 3, title: "SUV", icon: <FaTruck /> },
  { id: 4, title: "Coupe", icon: <FaMotorcycle /> },
  { id: 5, title: "Hatchback", icon: <FaBicycle /> },
  { id: 6, title: "Convertible", icon: <FaTractor /> },
  { id: 7, title: "Minivan", icon: <FaBus /> },
  { id: 8, title: "Crossover", icon: <FaShuttleVan /> },
];

interface FilterCardProps {
  id: number;
  title: string;
  icon: JSX.Element;
  isActive: boolean;
  onClick: (id: number) => void;
}

const FilterCard: React.FC<FilterCardProps> = ({ id, title, icon, isActive, onClick }) => {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      role="button"
      aria-selected={isActive}
      className={`cursor-pointer flex flex-col items-center justify-center p-2  
        w-20 h-16 md:w-24 md:h-20  
        rounded-xl transition-all duration-300 shadow-sm ${
          isActive
            ? "bg-marigold-100 text-marigold-900 shadow-md"
            : "bg-gray-100 text-gray-500 hover:shadow-md"
        } hover:bg-marigold-200 hover:text-marigold-900`}
    >
      <div className="mb-2 text-lg md:text-xl">{icon}</div>
      <h1 className="font-semibold text-center text-xs md:text-sm leading-tight">
        {title}
      </h1>
    </div>
  );
};

const Filter: React.FC = () => {
  const [filter, setFilter] = useState(1);

  const handleFilter = (id: number) => {
    setFilter(id);
  };

  return (
    <div className="md:flex justify-center items-center gap-4 grid grid-cols-4 p-4">
      {FilterData.map((data) => (
        <FilterCard
          key={data.id}
          id={data.id}
          title={data.title}
          icon={data.icon}
          isActive={filter === data.id}
          onClick={handleFilter}
        />
      ))}
    </div>
  );
};

export default Filter;
