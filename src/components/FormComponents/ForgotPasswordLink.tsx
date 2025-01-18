import React from "react";

const ForgotPasswordLink: React.FC = () => {
  return (
    <div className="mb-4">
      <a href="/password" className="text-blue-500 text-sm hover:text-blue-800">
        Forgot Password?
      </a>
    </div>
  );
};

export default ForgotPasswordLink;
