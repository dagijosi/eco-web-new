import React from "react";

type dataProps = {
  label?: string;
  placeholder?: string;
  type?: string;
};

interface FormProps {
  data: dataProps[];
  type: "login" | "signup";
  userType?: "renter" | "lessor";
  setUserType?: React.Dispatch<React.SetStateAction<"renter" | "lessor">>;
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
          <label className="flex items-center mb-2 font-bold text-gray-700 text-sm">
            <span className="mr-2">🚗</span> Choose your role:
          </label>

          <div className="flex space-x-2">
            <button
              type="button"
              aria-pressed={userType === "renter"}
              onClick={() => setUserType("renter")}
              className={`px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-light focus:ring-offset-2 w-full transition-colors duration-200 ${
                userType === "renter"
                  ? "bg-gold-light text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Car Renter
            </button>
            <button
              type="button"
              aria-pressed={userType === "lessor"}
              onClick={() => setUserType("lessor")}
              className={`px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-light focus:ring-offset-2 w-full transition-colors duration-200 ${
                userType === "lessor"
                  ? "bg-gold-light text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Car Lessor
            </button>
          </div>
        </div>
      )}
      <div
        className={`grid ${
          type === "signup" ? "grid-cols-2 gap-4" : "grid-cols-1 gap-4"
        }`}
      >
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
          <a
            href="/password"
            className="text-blue-500 text-sm hover:text-blue-800"
          >
            Forgot Password?
          </a>
        </div>
      )}
    </form>
  );
};

export default Form;
