import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SvgProps } from "../../interfaces";

const ErrorCircleOutline: React.FC<SvgProps> = ({ ...props }) => {
  return <Ionicons name="alert-circle-outline" size={24} {...props} />;
};

export default ErrorCircleOutline;
