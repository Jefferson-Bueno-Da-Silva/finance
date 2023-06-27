import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SvgProps } from "../../interfaces";

const RightArrow: React.FC<SvgProps> = ({ ...props }) => {
  return <Ionicons name="chevron-forward" size={24} {...props} />;
};

export default RightArrow;
