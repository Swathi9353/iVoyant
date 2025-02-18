import React from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = "info", onClose }) => {
  const alertClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div
      className={`p-4 rounded-md border ${alertClasses[type]} flex items-center justify-between`}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-sm font-bold text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
