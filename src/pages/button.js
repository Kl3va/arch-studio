import React from "react";

const Button = ({ className, text, children }) => {
  return (
    <button className={className}>
      {text}
      {children}
    </button>
  );
};

export default Button;
