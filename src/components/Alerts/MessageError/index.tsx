import React from "react";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

import { Body1 } from "../../../styles/fonts";
import { Container } from "./styles";
import { ErrorCircleOutline } from "../../../assets";

interface MessageErrorProps {
  errorMessage: string;
}

const MessageError: React.FC<MessageErrorProps> = ({ errorMessage }) => {
  const theme = useTheme();
  return (
    <Container>
      <ErrorCircleOutline color={theme.commons.error} />
      <Body1 style={{ marginLeft: 4 }} color={theme.commons.error}>
        {errorMessage}
      </Body1>
    </Container>
  );
};

export default MessageError;
