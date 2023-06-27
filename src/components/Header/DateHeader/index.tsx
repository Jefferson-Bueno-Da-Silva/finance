import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";

import {
  Button,
  Container,
  ContainerRow,
  SubTitle,
  TextContainer,
  Title,
} from "../styles";
import { LeftArrow, RightArrow } from "../../../assets";
import moment from "moment";
import { StatusBar } from "expo-status-bar";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const DateHeader: React.FC = () => {
  const theme = useTheme();
  const [currentMonth, setCurrentMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().year());

  const month = useMemo(() => months[currentMonth], [currentMonth]);

  const nextMonth = useCallback(() => {
    setCurrentMonth((old) => {
      if (old + 1 > 11) {
        setYear((old) => old + 1);
        return 0;
      }
      return old + 1;
    });
  }, []);

  const previousMonth = useCallback(() => {
    // setCurrentMonth((old) => (old - 1 < 0 ? 11 : old - 1));
    setCurrentMonth((old) => {
      if (old - 1 < 0) {
        setYear((old) => old - 1);
        return 11;
      }
      return old - 1;
    });
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.primary.black} />
      <ContainerRow>
        <Button onPress={previousMonth}>
          <LeftArrow color={theme.primary.whiteSmoke} />
        </Button>
        <TextContainer>
          <Title>{month}</Title>
          <SubTitle>{year}</SubTitle>
        </TextContainer>
        <Button onPress={nextMonth}>
          <RightArrow color={theme.primary.whiteSmoke} />
        </Button>
      </ContainerRow>
    </>
  );
};

export default DateHeader;
