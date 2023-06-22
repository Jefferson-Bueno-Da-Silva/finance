import React from "react";
import { VictoryPie, Slice } from "victory-native";
import { useTheme } from "styled-components";
import { SliceProps } from "victory-pie";

import { Body2, Header2, Header3 } from "../../../styles/fonts";
import { Container, Content } from "./styles";
import { Masks, formatWithMask } from "react-native-mask-input";

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
interface GraphicProps {
  incomeTotal: number;
  invoiceTotal: number;
}

const Pie: React.FC<GraphicProps> = ({ incomeTotal, invoiceTotal }) => {
  const theme = useTheme();

  return (
    <Container>
      <VictoryPie
        data={[invoiceTotal, incomeTotal - invoiceTotal]}
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
          {
            formatWithMask({
              text: incomeTotal.toFixed(2),
              maskAutoComplete: true,
              mask: Masks.BRL_CURRENCY,
            }).masked
          }
        </Header2>
        <Body2>Débito</Body2>
        <Header3 color={theme.primary.darkRed}>
          {
            formatWithMask({
              text: invoiceTotal.toFixed(2),
              maskAutoComplete: true,
              mask: Masks.BRL_CURRENCY,
            }).masked
          }
        </Header3>
      </Content>
    </Container>
  );
};

export default Pie;
