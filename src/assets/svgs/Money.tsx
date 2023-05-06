import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { SvgProps } from "../../interfaces";

const Money: React.FC<SvgProps> = ({ ...props }) => {
  return <MaterialIcons name="attach-money" size={24} {...props} />;
};

export default Money;
