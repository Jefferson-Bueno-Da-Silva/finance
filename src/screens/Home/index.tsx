import React, { useCallback, useRef, useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { ListData, TypeData } from "../../interfaces";
import {
  FloatButton,
  GraphicPie,
  ListItems,
  BigModal,
  DateHeader,
} from "../../components";
import { BigModalRefs } from "../../components/Modals/BigModal";
import useListItems from "../../hooks/listItems/useListItems";
import { Container } from "./styles";
import { useTransactions } from "../../hooks";

const Home: React.FC = () => {
  const bigModalRef = useRef<BigModalRefs>(null);
  const [showButton, setShowButton] = useState<boolean>(true);
  const { incomeData, invoiceData } = useListItems();
  const { remove } = useTransactions();

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

  const handleDelete = useCallback((type: TypeData, data: ListData) => {
    remove(type, data);
  }, []);

  return (
    <Container>
      <DateHeader />
      <ListItems
        data={[incomeData, invoiceData]}
        onPressLeft={(type, data) => handleOpenModal(type, data)}
        onPressRight={(type, data) => handleDelete(type, data)}
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
