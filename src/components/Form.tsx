import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "./FormComponents/CustomInput";
import RoleSelection from "./FormComponents/RoleSelection";
import SubmitButton from "./FormComponents/SubmitButton";
import RememberPassword from "./FormComponents/RememberPassword";
import ForgotPasswordLink from "./FormComponents/ForgotPasswordLink";

type dataProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
};

interface FormProps {
  data: dataProps[];
  type: "login" | "signup";
  userType?: "renter" | "lessor";
  setUserType?: React.Dispatch<React.SetStateAction<"renter" | "lessor">>;
}

const Form: React.FC<FormProps> = ({ data, type, userType, setUserType }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (type === "login") {
      navigate("/");
    } else if (type === "signup") {
      navigate("/login");
    }
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      {type === "signup" && setUserType && (
        <RoleSelection userType={userType} setUserType={setUserType} />
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
            icon={value?.icon}
          />
        ))}
      </div>
      {type === "login" && <RememberPassword />}
      <SubmitButton type={type} />
      {type === "login" && <ForgotPasswordLink />}
    </form>
  );
};

export default Form;
