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

type DateHeaderProps = {
  currentMonth: number;
  currentYear: number;
  nextMonth: () => void;
  previousMonth: () => void;
};

const DateHeader: React.FC<DateHeaderProps> = ({
  currentMonth,
  previousMonth,
  nextMonth,
  currentYear,
}) => {
  const theme = useTheme();
  const monthName = useMemo(() => months[currentMonth], [currentMonth]);

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.primary.black} />
      <ContainerRow>
        <Button onPress={previousMonth}>
          <LeftArrow color={theme.primary.whiteSmoke} />
        </Button>
        <TextContainer>
          <Title>{monthName}</Title>
          <SubTitle>{currentYear}</SubTitle>
        </TextContainer>
        <Button onPress={nextMonth}>
          <RightArrow color={theme.primary.whiteSmoke} />
        </Button>
      </ContainerRow>
    </>
  );
};

export default DateHeader;
