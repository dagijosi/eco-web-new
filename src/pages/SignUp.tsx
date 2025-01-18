import { useState } from "react";
import Form from "../components/Form";

const SignUp = () => {
  const [userType, setUserType] = useState<"renter" | "renti">("renter");

  const commonData = [
    { label: "First Name", placeholder: "First Name", type: "text" },
    { label: "Last Name", placeholder: "Last Name", type: "text" },
    { label: "Email Address", placeholder: "Email Address", type: "email" },
    { label: "Password", placeholder: "Password", type: "password" },
    { label: "Confirm Password", placeholder: "Confirm Password", type: "password" },
  ];

  const renterData = [
    { label: "Driver's License Number", placeholder: "Driver's License Number", type: "text" },
    { label: "Phone Number", placeholder: "Phone Number", type: "tel" },
  ];

  const rentiData = [
    { label: "Car Model", placeholder: "Car Model", type: "text" },
    { label: "Car Year", placeholder: "Car Year", type: "number" },
  ];

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 shadow-lg px-4 rounded-lg max-w-7xl overflow-hidden">
        <img
          src="/images/login.png"
          alt="logo"
          className="order-1 md:order-2 w-full md:w-2/5 object-cover"
        />
        <div className="flex flex-col justify-center items-center order-2 md:order-1 bg-white p-8 w-full md:w-1/2">
          <h1 className="bg-clip-text bg-gradient-to-tr from-gold to-gold-light drop-shadow-lg mb-4 p-4 font-bold text-4xl text-center text-transparent tracking-wide">
            Sign Up
          </h1>
          <Form
            type="signup"
            userType={userType}
            setUserType={setUserType}
            data={commonData.concat(userType === "renter" ? renterData : rentiData)}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
