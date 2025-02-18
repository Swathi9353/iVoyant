import React from "react";

interface InputProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",placeholder,value,onChange,disabled,}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
    />
  );
};

export default Input;
