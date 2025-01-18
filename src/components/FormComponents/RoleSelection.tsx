import React from "react";

const RoleSelection: React.FC<{
  userType?: "renter" | "lessor";
  setUserType: React.Dispatch<React.SetStateAction<"renter" | "lessor">>;
}> = ({ userType, setUserType }) => {
  return (
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
  );
};

export default RoleSelection;
