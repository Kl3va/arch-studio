import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, text, children, page }) => {
  return (
    <button className={className}>
      <Link to={`/${page}`}>
        {text}
        {children}
      </Link>
    </button>
  );
};

export default Button;
