import React from "react";
import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  let navigate = useNavigate();
  return { navigate };
};

export default useNavigation;
