import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SvgProps } from "../../interfaces";

const LeftArrow: React.FC<SvgProps> = ({ ...props }) => {
  return <Ionicons name="chevron-back" size={24} {...props} />;
};

export default LeftArrow;
