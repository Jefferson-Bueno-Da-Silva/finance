import React, { useCallback, useRef, useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { FloatButton, GraphicPie, ListItens, BigModal } from "../../components";
import { Container } from "./styles";
import { BigModalRefs } from "../../components/Modals/BigModal";

const Home: React.FC = () => {
  const bigModalRef = useRef<BigModalRefs>(null);
  const [showButton, setShowButton] = useState<boolean>(true);

  const onFloatButtonVisible = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    // total 300px
    setShowButton(event.nativeEvent.contentOffset.y < 10 ? true : false);
  };

  const handleOpenModal = useCallback(
    (text: string) => {
      bigModalRef.current?.open(text);
    },
    [bigModalRef]
  );

  return (
    <Container>
      <ListItens onScroll={onFloatButtonVisible} header={<GraphicPie />} />
      <FloatButton
        showButton={showButton}
        onPressGreen={() => handleOpenModal("Renda")}
        onPressRed={() => handleOpenModal("Débito")}
      />
      <BigModal ref={bigModalRef} />
    </Container>
  );
};

export default Home;
