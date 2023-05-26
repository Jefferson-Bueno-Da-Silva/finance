import { Feather } from "@expo/vector-icons";
import { SvgProps } from "../../interfaces";

const CheckIcon: React.FC<SvgProps> = ({ ...props }) => {
  return <Feather name="check" size={24} {...props} />;
};

export default CheckIcon;
