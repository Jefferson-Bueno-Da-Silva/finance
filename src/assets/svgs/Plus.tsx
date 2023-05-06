import React from "react";
import { Octicons } from "@expo/vector-icons";
import { SvgProps } from "../../interfaces";

const Plus: React.FC<SvgProps> = ({ ...props }) => {
  return <Octicons name="plus" size={24} {...props} />;
};

export default Plus;
