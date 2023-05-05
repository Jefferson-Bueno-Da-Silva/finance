import React from "react";

import { Container } from "./styles";
import { GraphicPie, ListItens } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <GraphicPie />
      <ListItens />
    </Container>
  );
};

export default Home;
