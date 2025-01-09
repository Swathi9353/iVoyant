import React from 'react';



interface InputFieldProps {
  label: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name }) => {
  return (
    <div>
      <label>
        {label}
        <input type="text" name={name} />
      </label>
    </div>
  );
};

export default InputField;
