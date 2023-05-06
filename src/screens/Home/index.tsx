import React from "react";

import { FloatButton, GraphicPie, ListItens } from "../../components";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <ListItens header={<GraphicPie />} />
      <FloatButton />
    </Container>
  );
};

export default Home;
