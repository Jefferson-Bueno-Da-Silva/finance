import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";

import { Button, Container, ContainerRow, Title } from "../styles";
import { LeftArrow, RightArrow } from "../../../assets";
import moment from "moment";

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

  const month = useMemo(() => months[currentMonth], [currentMonth]);

  const nextMonth = useCallback(() => {
    setCurrentMonth((old) => (old + 1 > 11 ? 0 : old + 1));
  }, []);

  const previousMonth = useCallback(() => {
    setCurrentMonth((old) => (old - 1 < 0 ? 11 : old - 1));
  }, []);

  return (
    <ContainerRow>
      <Button onPress={previousMonth}>
        <LeftArrow color={theme.primary.black} />
      </Button>
      <Title>{month}</Title>
      <Button onPress={nextMonth}>
        <RightArrow color={theme.primary.black} />
      </Button>
    </ContainerRow>
  );
};

export default DateHeader;
