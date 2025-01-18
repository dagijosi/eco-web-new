import React from "react";

const RememberPassword: React.FC = () => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-700 text-sm">
        <input type="checkbox" className="mr-2 leading-tight" />
        Remember Password
      </label>
    </div>
  );
};

export default RememberPassword;
