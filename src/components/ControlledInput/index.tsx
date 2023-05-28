import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInput, TextInputProps } from "../Inputs";

type Props = TextInputProps & {
  control: Control<any>;
  name: string;
};

const ControlledInput: React.FC<Props> = ({ control, name, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput onChangeText={onChange} value={value} {...rest} />
      )}
    />
  );
};

export default ControlledInput;
