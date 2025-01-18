import Form from "../components/Form";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const iconStyle = "text-marigold-400";

  return (
    <div className="flex justify-center items-center p-4 min-h-[calc(100vh-100px)]">
      <div className="flex md:flex-row flex-col justify-center items-center shadow-lg px-4 py-10 rounded-lg max-w-4xl overflow-hidden">
        <img
          src="/images/login.png"
          alt="logo"
          className="w-1/2 md:w-2/5 object-cover"
        />
        <div className="flex flex-col justify-center items-center bg-white p-8 w-full md:w-1/2">
          <h1 className="bg-clip-text bg-gradient-to-tr from-marigold-500 to-marigold-400 drop-shadow-lg mb-4 p-4 font-bold text-4xl text-center text-transparent tracking-wide">
            Login
          </h1>
          <Form
            type="login"
            data={[
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
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
