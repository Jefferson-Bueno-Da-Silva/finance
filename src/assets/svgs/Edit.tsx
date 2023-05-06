import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SvgProps } from "../../interfaces";

const Edit: React.FC<SvgProps> = ({ ...props }) => {
  return <Ionicons name="ios-create-outline" size={24} {...props} />;
};

export default Edit;
