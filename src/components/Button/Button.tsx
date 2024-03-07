import React from "react";

type ButtonProps = {
  label: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button className="border-2 border-blue-900 hover:border-blue-500 active:border-blue-300 focus:border-blue-700 transition-colors duration-200 rounded-md px-2 bg-white text-black">
      {props.label}
    </button>
  );
};

export default Button;
