import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { SvgProps } from "../../interfaces";

const Trash: React.FC<SvgProps> = ({ ...props }) => {
  return <Ionicons name="trash-bin-outline" size={24} {...props} />;
};

export default Trash;
