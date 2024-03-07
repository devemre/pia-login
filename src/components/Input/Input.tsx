import React from "react";

type InputProps = {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <p className="text-sm text-white">{props.label}</p>
      <input
        className="border-2 border-blue-900 rounded-md outline-none px-2 hover:border-blue-500 active:border-blue-300 focus:border-blue-700 transition-colors duration-200"
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
