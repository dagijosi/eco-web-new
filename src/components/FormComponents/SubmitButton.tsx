import React from "react";

const SubmitButton: React.FC<{ type: "login" | "signup" }> = ({ type }) => {
  return (
    <button
      type="submit"
      className="bg-gradient-to-r from-gold-light hover:from-gold to-gold hover:to-gold-dark shadow-md hover:shadow-lg px-5 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:ring-offset-2 w-full font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none"
    >
      {type === "login" ? "Login" : "Sign Up"}
    </button>
  );
};

export default SubmitButton;
