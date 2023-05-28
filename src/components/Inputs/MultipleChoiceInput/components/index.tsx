import React, { useCallback, useState } from "react";
import { DefaultTheme } from "styled-components/native";

import { CheckIcon } from "../../../../assets";
import { Label1 } from "../../../../styles/fonts";
import { Checkbox, CheckboxContainer } from "../styles";
import { option } from "..";

interface RenderValueProps extends option {
  theme: DefaultTheme;
  onPress: (value: option) => void;
  active: boolean;
}

const RenderValue: React.FC<RenderValueProps> = ({
  label,
  value,
  theme,
  onPress,
  active,
}) => {
  return (
    <CheckboxContainer key={label}>
      <Checkbox active={!!active} onPress={() => onPress({ label, value })}>
        {!!active && <CheckIcon color={theme.primary.cleanGreen} />}
      </Checkbox>
      <Label1 color={theme.primary.black}>{label}</Label1>
    </CheckboxContainer>
  );
};

export default RenderValue;
