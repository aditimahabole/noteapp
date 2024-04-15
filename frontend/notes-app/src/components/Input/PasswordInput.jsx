import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShowPassword = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="w-full flex items-center  px-5 text-sm bg-transparent border-[1.5px]  rounded mb-4  outline-none">
      <input
        value={value}
        onChange={onChange}
        type={isShow ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded  outline-none"
      />
      {isShow ? (
        <FaRegEye
          size={22}
          className="text-blue-500 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className=" text-slate-400 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default PasswordInput;
