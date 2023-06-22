import React, { useCallback, useRef, useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import uuid from "react-native-uuid";

import { ListData, TypeData } from "../../interfaces";
import { FloatButton, GraphicPie, ListItems, BigModal } from "../../components";
import { BigModalRefs } from "../../components/Modals/BigModal";
import useListItems from "../../hooks/listItems/useListItems";
import { Container } from "./styles";

const Home: React.FC = () => {
  const bigModalRef = useRef<BigModalRefs>(null);
  const [showButton, setShowButton] = useState<boolean>(true);
  const { incomeData, invoiceData } = useListItems();

  const onFloatButtonVisible = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    setShowButton(event.nativeEvent.contentOffset.y < 10 ? true : false);
  };

  const handleOpenModal = useCallback(
    (text: TypeData, data?: ListData) => {
      bigModalRef.current?.open(text, data);
    },
    [bigModalRef]
  );

  return (
    <Container>
      <ListItems
        data={[incomeData, invoiceData]}
        onPressLeft={(type, data) => handleOpenModal(type, data)}
        onPressRight={() => {}}
        onScroll={onFloatButtonVisible}
        header={
          <GraphicPie
            incomeTotal={incomeData.total}
            invoiceTotal={invoiceData.total}
          />
        }
      />
      <FloatButton
        showButton={showButton}
        onPressGreen={() => handleOpenModal("income")}
        onPressRed={() => handleOpenModal("invoice")}
      />
      <BigModal ref={bigModalRef} />
    </Container>
  );
};

export default Home;
