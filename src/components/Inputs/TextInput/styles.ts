import styled, { css } from "styled-components/native";

export interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.View<ContainerProps>`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
  margin-bottom: 16px;
`;

export interface InputContainerProps {
  selected?: boolean;
  error?: boolean;
}

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  height: 48px;
  background-color: ${(props) => props.theme.secondary.white};
  border-radius: 8px;
  padding: 0px 16px;
  align-items: center;
  ${(props) =>
    props.selected &&
    css`
      border-width: 1px;
      border-color: ${props.theme.primary.cleanGreen};
    `}
  ${(props) =>
    props.error &&
    css`
      border-width: 1px;
      border-color: ${props.theme.commons.error};
    `}
`;

export const IconContainer = styled.View`
  margin-right: 12px;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.primary.gray,
}))`
  flex: 1;
  padding: 13px 0px;
`;
