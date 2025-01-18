import React from "react";

const SubmitButton: React.FC<{ type: "login" | "signup" }> = ({ type }) => {
  return (
    <button
      type="submit"
      className="bg-gradient-to-r from-marigold-400 hover:from-marigold-600 to-marigold-600 hover:to-marigold-700 shadow-md hover:shadow-lg px-5 py-3 rounded-lg focus:ring-2 focus:ring-marigold-500 focus:ring-offset-2 w-full font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none"
    >
      {type === "login" ? "Login" : "Sign Up"}
    </button>
  );
};

export default SubmitButton;
