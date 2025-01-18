import { useState } from "react";
import Form from "../components/Form";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaPhone,
  FaCar,
  FaCalendar,
} from "react-icons/fa";

const iconStyle = "text-gold/70";

const commonData = [
  {
    label: "First Name",
    placeholder: "First Name",
    type: "text",
    icon: <FaUser className={iconStyle} />,
  },
  {
    label: "Last Name",
    placeholder: "Last Name",
    type: "text",
    icon: <FaUser className={iconStyle} />,
  },
  {
    label: "Email Address",
    placeholder: "Email Address",
    type: "email",
    icon: <FaEnvelope className={iconStyle} />,
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    icon: <FaLock className={iconStyle} />,
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm Password",
    type: "password",
    icon: <FaLock className={iconStyle} />,
  },
];

const renterData = [
  {
    label: "Driver's License Number",
    placeholder: "Driver's License Number",
    type: "text",
    icon: <FaIdCard className={iconStyle} />,
  },
  {
    label: "Phone Number",
    placeholder: "Phone Number",
    type: "tel",
    icon: <FaPhone className={iconStyle} />,
  },
];

const lessorData = [
  {
    label: "Car Model",
    placeholder: "Car Model",
    type: "text",
    icon: <FaCar className={iconStyle} />,
  },
  {
    label: "Car Year",
    placeholder: "Car Year",
    type: "number",
    icon: <FaCalendar className={iconStyle} />,
  },
];

const SignUp = () => {
  const [userType, setUserType] = useState<"renter" | "lessor">("renter");

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 shadow-lg px-4 py-2 md:py-0 rounded-lg max-w-7xl overflow-hidden">
        <img
          src="/images/login.png"
          alt="logo"
          className="order-1 md:order-2 w-1/2 md:w-2/5 object-cover"
        />
        <div className="flex flex-col justify-center items-center order-2 md:order-1 bg-white md:p-8 w-full md:w-1/2">
          <h1 className="bg-clip-text bg-gradient-to-tr from-gold to-gold-light drop-shadow-lg mb-4 p-4 font-bold text-4xl text-center text-transparent tracking-wide">
            Sign Up
          </h1>
          <Form
            type="signup"
            userType={userType}
            setUserType={setUserType}
            data={commonData.concat(
              userType === "renter" ? renterData : lessorData
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
