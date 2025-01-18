import React from "react";

const RoleSelection: React.FC<{
  userType?: "renter" | "lessor";
  setUserType: React.Dispatch<React.SetStateAction<"renter" | "lessor">>;
}> = ({ userType, setUserType }) => {
  const roles = [
    { type: "renter", label: "Car Renter" },
    { type: "lessor", label: "Car Lessor" },
  ];

  return (
    <div className="mb-4 w-full">
      <label className="flex items-center mb-2 font-bold text-gray-700 text-sm">
        <span className="mr-2">🚗</span> Choose your role:
      </label>
      <div className="flex space-x-2">
        {roles.map((role) => (
          <button
            key={role.type}
            type="button"
            aria-pressed={userType === role.type}
            onClick={() => setUserType(role.type as "renter" | "lessor")}
            className={`px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-marigold-400 focus:ring-offset-2 w-full transition-colors duration-200 ${
              userType === role.type
                ? "bg-marigold-400 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {role.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;
