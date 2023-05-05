import styled from "styled-components/native";
import { Text } from "react-native";

interface TextProps {
  color?: string;
}

export const Header1 = styled(Text)<TextProps>`
  font-family: Inter-SemiBold;
  font-size: 24px;
  color: ${(props) => props.color || props.theme.primary.black};
`;
export const Header2 = styled(Text)<TextProps>`
  font-family: Inter-Bold;
  font-size: 24px;
  color: ${(props) => props.color || props.theme.primary.black};
`;
export const Header3 = styled(Text)<TextProps>`
  font-family: Inter-ExtraBold;
  font-size: 18px;
  color: ${(props) => props.color || props.theme.primary.black};
`;
export const Header4 = styled(Text)<TextProps>`
  font-family: Inter-Bold;
  font-size: 16px;
  color: ${(props) => props.color || props.theme.primary.black};
`;
export const Body1 = styled(Text)<TextProps>`
  font-family: Inter-Medium;
  font-size: 12px;
  color: ${(props) => props.color || props.theme.primary.black};
`;
export const Body2 = styled(Text)<TextProps>`
  font-family: Inter-Bold;
  font-size: 10px;
  color: ${(props) => props.color || props.theme.primary.black};
`;
export const Label1 = styled(Text)<TextProps>`
  font-family: Inter-Regular;
  font-size: 10px;
  color: ${(props) => props.color || props.theme.primary.black};
`;
