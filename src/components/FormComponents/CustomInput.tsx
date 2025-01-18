import React from "react";

type dataProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
};

const CustomInput: React.FC<dataProps> = ({
  label,
  placeholder,
  type,
  icon,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-700 text-sm">
        {label}
      </label>
      <div className="flex items-center shadow focus:shadow-outline px-3 py-2 border rounded w-full text-gray-700 leading-tight appearance-none focus:outline-none">
        {icon && <span className="mr-2">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className="px-2 py-1 w-full focus:outline-none"
        />
      </div>
    </div>
  );
};

export default CustomInput;
