import styled from "styled-components/native";
import { View } from "react-native";

export const Container = styled(View)``;

export const ContentValue = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ListContainer = styled(View)`
  width: 100%;
  height: 262px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.primary.white};
  overflow: hidden;
`;
