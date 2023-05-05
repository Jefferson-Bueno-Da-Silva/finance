import React from "react";
import { VictoryPie, Slice } from "victory-native";
import { useTheme } from "styled-components";
import { SliceProps } from "victory-pie";

import { Body2, Header2, Header3 } from "../../../styles/fonts";
import { Container, Content } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const incoming = 2000;
const debt = 900;

const data = [debt, incoming - debt];

function CustomSlice(props: SliceProps) {
  const sliceOverride = {
    ...props.slice,
    endAngle: (props.slice?.endAngle ?? 0) + 0.2,
  };

  return (
    <Slice
      {...props}
      slice={sliceOverride}
      cornerRadius={50}
      sliceStartAngle={props.sliceStartAngle}
      sliceEndAngle={props.sliceStartAngle}
    />
  );
}

const Pie: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <VictoryPie
        data={data}
        padding={0}
        animate={{ duration: 1000 }}
        colorScale={[theme.secondary.darkRed, theme.primary.cleanGreen]}
        height={214}
        width={214}
        labels={() => ""}
        innerRadius={80}
        dataComponent={<CustomSlice />}
      />
      <Content>
        <Body2>Renda</Body2>
        <Header2 color={theme.primary.darkGreen}>
          R$ {incoming.toFixed(2).replace(".", ",")}
        </Header2>
        <Body2>Débito</Body2>
        <Header3 color={theme.primary.darkRed}>
          R$ {debt.toFixed(2).replace(".", ",")}
        </Header3>
      </Content>
    </Container>
  );
};

export default Pie;
