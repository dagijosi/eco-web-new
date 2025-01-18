import React from "react";

type dataProps = {
  label?: string;
  placeholder?: string;
  type?: string;
};

interface FormProps {
  data: dataProps[];
  type: "login" | "signup";
  userType?: "renter" | "renti";
  setUserType?: React.Dispatch<React.SetStateAction<"renter" | "renti">>;
}

const Form: React.FC<FormProps> = ({ data, type, userType, setUserType }) => {
  const CustomInput: React.FC<dataProps> = ({ label, placeholder, type }) => {
    return (
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700 text-sm">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="shadow focus:shadow-outline px-3 py-2 border rounded w-full text-gray-700 leading-tight appearance-none focus:outline-none"
        />
      </div>
    );
  };

  return (
    <form className="w-full max-w-lg">
      {type === "signup" && setUserType && (
        <div className="mb-4 w-full">
          <label className="block mb-2 font-bold text-gray-700 text-sm">
            I am a:
          </label>
          <div className="flex space-x-0.5">
            <button
              type="button"
              onClick={() => setUserType("renter")}
              className={`px-4 py-2 rounded-lg focus:outline-none w-full ${
                userType === "renter" ? "bg-blue-500 text-white" : "bg-gray-200 opacity-50"
              }`}
            >
              Car Renter
            </button>
            <button
              type="button"
              onClick={() => setUserType("renti")}
              className={`px-4 py-2 rounded-lg focus:outline-none w-full ${
                userType === "renti" ? "bg-blue-500 text-white" : "bg-gray-200 opacity-50"
              }`}
            >
              Car Renti
            </button>
          </div>
        </div>
      )}
      <div className={`grid ${type === "signup" ? "grid-cols-2 gap-4" : "grid-cols-1 gap-4"}`}>
        {data?.map((value, index) => (
          <CustomInput
            key={index}
            label={value?.label}
            placeholder={value?.placeholder}
            type={value?.type}
          />
        ))}
      </div>
      {type === "login" && (
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700 text-sm">
            <input type="checkbox" className="mr-2 leading-tight" />
            Remember Password
          </label>
        </div>
      )}
      <button
        type="submit"
        className="bg-gradient-to-r from-gold-light hover:from-gold to-gold hover:to-gold-dark shadow-md hover:shadow-lg px-5 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:ring-offset-2 w-full font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none"
      >
        {type === "login" ? "Login" : "Sign Up"}
      </button>
      {type === "login" && (
        <div className="mb-4">
          <a href="/password" className="text-blue-500 text-sm hover:text-blue-800">
            Forgot Password?
          </a>
        </div>
      )}
    </form>
  );
};

export default Form;
