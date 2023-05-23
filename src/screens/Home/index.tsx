import React, { useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { FloatButton, GraphicPie, ListItens } from "../../components";
import { Container } from "./styles";

const Home: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(true);

  const onFloatButtonVisible = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    // total 300px
    setShowButton(event.nativeEvent.contentOffset.y < 10 ? true : false);
  };

  return (
    <Container>
      <ListItens onScroll={onFloatButtonVisible} header={<GraphicPie />} />
      <FloatButton showButton={showButton} />
    </Container>
  );
};

export default Home;
