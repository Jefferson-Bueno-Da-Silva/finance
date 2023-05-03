import React, { memo } from "react";

import ListContainer from "../components/ListContainer";

import { Container, ContentValue } from "./styles";
import { Body1, Header4 } from "../../../styles/fonts";

const ListItens: React.FC = () => {
  return (
    <Container>
      <ContentValue>
        <Header4>Entrada</Header4>
        <Body1>R$ 1500.00</Body1>
      </ContentValue>
      <ListContainer />
    </Container>
  );
};

export default memo(ListItens);
